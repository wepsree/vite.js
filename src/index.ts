import * as _abi from './abi';
import * as _error from './error';
import * as _keystore from './keystore';
import * as _utils from './utils';
import * as _constant from './constant';
import * as _account from './accountBlock/account';
import * as _accountBlock from './accountBlock';
import * as _communication from './communication';
import * as _provider from './viteAPI/provider';
import _viteAPI from './viteAPI';
import _wallet from './wallet';
import _httpRpc from './HTTP';
import _ipcRpc from './IPC';
import _wsRpc from './WS';

// Not Change
export const abi = _abi;
export const error = _error;
export const keystore = _keystore;

// Add functions
export const utils = _utils;
export const constant = _constant;
export const communication = _communication;

// Change a lot
export const accountBlock = _accountBlock;
export const account = _account;
export const provider = _provider;

// Add
export const ViteAPI = _viteAPI;
export const wallet = _wallet;
export const HTTP_RPC = _httpRpc;
export const IPC_RPC = _ipcRpc;
export const WS_RPC = _wsRpc;
