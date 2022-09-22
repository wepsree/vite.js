const assert = require('assert');
import { Communication, IPC_WS } from '../../src/communication/index';

describe('Communication', function () {
	const C = new Communication();

	// payload format
	const Method_Name = 'request_payload_method';
	const Params = { x: 1, y: 2 };

	const Request_Payload = C._getRequestPayload(Method_Name, Params);
	const Request_Payload_Result = {
		jsonrpc: '2.0',
		method: Method_Name,
		params: Params,
		id: C._requestId,
	};
	const Request_Payload_No_Method = C._getRequestPayload();

	const Notification_Payload = C._getNotificationPayload(Method_Name, Params);
	const Notification_Payload_Result = {
		jsonrpc: '2.0',
		method: Method_Name,
		params: Params,
	};
	const Notification_Payload_No_Method = C._getNotificationPayload();

	const currentId = C._requestId;
	const Batch_Payload = C._getBatchPayload([
		{
			type: 'request',
			methodName: 'request1',
			params: [1, 2],
		},
		{
			type: 'notification',
			methodName: 'notification1',
		},
		{
			type: 'notification',
			methodName: 'notification2',
			params: ['ok', 'no'],
		},
		{
			type: 'request',
			methodName: 'request1',
		},
	]);
	const Batch_Payload_Result = [
		{
			jsonrpc: '2.0',
			method: 'request1',
			params: [1, 2],
			id: currentId + 1,
		},
		{
			jsonrpc: '2.0',
			method: 'notification1',
		},
		{
			jsonrpc: '2.0',
			method: 'notification2',
			params: ['ok', 'no'],
		},
		{
			jsonrpc: '2.0',
			method: 'request1',
			id: currentId + 2,
		},
	];
	const Batch_Payload_No_Requests = C._getBatchPayload();
	const Batch_Payload_No_Requests_Length = C._getBatchPayload([]);

	it('request_payload', function () {
		assert.deepEqual(Request_Payload, Request_Payload_Result);
	});
	it('request_payload_no_method', function () {
		assert.deepEqual(Request_Payload_No_Method instanceof Error, true);
	});

	it('notification_payload', function () {
		assert.deepEqual(Notification_Payload, Notification_Payload_Result);
	});
	it('notification_payload_no_method', function () {
		assert.deepEqual(Notification_Payload_No_Method instanceof Error, true);
	});

	it('batch_payload', function () {
		assert.deepEqual(Batch_Payload, Batch_Payload_Result);
	});
	it('batch_payload_no_requests', function () {
		assert.deepEqual(Batch_Payload_No_Requests instanceof Error, true);
	});
	it('batch_payload_no_requests_length', function () {
		assert.deepEqual(Batch_Payload_No_Requests_Length instanceof Error, true);
	});
});

describe('IPC_WS', function () {
	const I = new IPC_WS({});

	it('extends of Communication', function () {
		assert.equal(I instanceof Communication, true);
	});

	['on', 'remove', 'request', 'sendNotification', 'batch', 'subscribe', 'unsubscribe'].forEach(
		(key) => {
			it(`function ${key}`, function () {
				assert.equal(typeof I[key], 'function');
			});
		}
	);
});
