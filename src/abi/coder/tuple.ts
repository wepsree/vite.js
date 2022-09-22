import { Coder, Reader, Writer } from './index';

export class TupleCoder extends Coder {
	readonly coders: Array<Coder>;

	constructor(coders: Array<Coder>, localName: string) {
		let dynamic = false;
		const types: Array<string> = [];
		coders.forEach((coder) => {
			if (coder.dynamic) {
				dynamic = true;
			}
			types.push(coder.type);
		});
		const type = `tuple(${types.join(',')})`;

		super('tuple', type, localName, dynamic);
		this.coders = coders;
	}

	defaultValue(): any {
		let values: any = [];
		this.coders.forEach((coder) => {
			values.push(coder.defaultValue());
		});

		// We only output named properties for uniquely named coders
		const uniqueNames = this.coders.reduce((accum, coder) => {
			const name = coder.localName;
			if (name) {
				if (!accum[name]) {
					accum[name] = 0;
				}
				accum[name]++;
			}
			return accum;
		}, {});

		// Add named values
		const tuple = {};
		this.coders.forEach((coder: Coder, index: number) => {
			let name = coder.localName;
			if (!name || uniqueNames[name] !== 1) {
				return;
			}

			if (name === 'length') {
				name = '_length';
			}

			if (values[name] != null) {
				return;
			}

			if (this.localName !== '_') {
				tuple[name] = values[index];
			}
			// values[name] = values[index];
		});

		if (Object.keys(tuple).length === values.length) {
			values = tuple;
		}

		return Object.freeze(values);
	}

	encode(writer: Writer, value: Array<any> | { [name: string]: any }): number {
		return this.pack(writer, this.coders, value);
	}

	decode(reader: Reader): any {
		return reader.coerce(this, this.unpack(reader, this.coders));
	}
}
