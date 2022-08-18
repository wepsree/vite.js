import { Coder, Reader, Writer } from './index';

export class BooleanCoder extends Coder {
    constructor(localName: string) {
        super('bool', 'bool', localName, false);
    }

    defaultValue(): boolean {
        return false;
    }

    encode(writer: Writer, value: boolean): number {
        return writer.writeValue(value ? 1 : 0);
    }

    decode(reader: Reader): any {
        return reader.coerce(this, !reader.readValue().isZero());
    }
}

