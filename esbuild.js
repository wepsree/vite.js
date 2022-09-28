const globalsPlugin = require('@esbuild-plugins/node-globals-polyfill');
const modulesPlugin = require('@esbuild-plugins/node-modules-polyfill');

const args = process.argv.slice(2);
const PROD = args.includes('--prod');

require('esbuild')
	.build({
		entryPoints: ['src/index.ts'],
		outdir: 'dist',
		bundle: true,
		platform: 'browser',
		sourcemap: !PROD,
		watch: !PROD,
		minify: PROD,
		treeShaking: PROD,
		format: 'esm',
		plugins: [
			// https://stackoverflow.com/questions/70549362/how-do-you-shim-react-pdf-with-esbuild
			globalsPlugin.NodeGlobalsPolyfillPlugin({
				process: true,
				buffer: true,
				define: { 'process.env.NODE_ENV': PROD ? '"production"' : '"development"' },
			}),
			modulesPlugin.NodeModulesPolyfillPlugin(),
		],
		drop: PROD ? ['console'] : [],
		// logLevel: 'debug',
		// logLevel: 'silent',
		watch: !PROD && {
			onRebuild(error, result) {
				const time = Date.now();
				if (error) console.error(`watch build failed ${time}:`, error);
				else console.log(`watch build succeeded ${time}:`, result);
			},
		},
	})
	.catch(() => process.exit(1));
