import './cover';

describe('Require package', function () {
    require('./envTest/es5');
});

describe('Communication Test: src/communication', function () {
    require('./packages/communication');
});

describe('ViteAPI Test: src/viteAPI', function () {
    require('./packages/viteAPI/client');
    require('./packages/viteAPI/index');
});

// viteAPI
// http
// ipc
// ws
// require('./RPC/index.js');
