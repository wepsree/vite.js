import { encodeFunctionSignature } from 'abi';
import { _methods } from '../type';

export const Vite_TokenId = 'tti_5649544520544f4b454e6e40';

export const Default_Hash = '0000000000000000000000000000000000000000000000000000000000000000'; // A total of 64 0

export const Snapshot_Gid = '00000000000000000001';
export const Delegate_Gid = '00000000000000000002';

export const Quota_Addr = 'vite_000000000000000000000000000000000000000309508ba646';
export const Vote_Addr = 'vite_000000000000000000000000000000000000000270a48cc491';
export const Register_Addr = 'vite_0000000000000000000000000000000000000001c9e9f25417';
export const Mintage_Addr = 'vite_00000000000000000000000000000000000000056ad6d26692';
export const DexFund_Addr = 'vite_000000000000000000000000000000000000000617d47459a8';
export const DexTrade_Addr = 'vite_000000000000000000000000000000000000000768ef0e6238';

// SBP
export const Register_Abi = { 'type': 'function', 'name': 'Register', 'inputs': [ { 'name': 'gid', 'type': 'gid' }, { 'name': 'name', 'type': 'string' }, { 'name': 'nodeAddr', 'type': 'address' } ] };
export const UpdateRegistration_Abi = { 'type': 'function', 'name': 'UpdateRegistration', 'inputs': [ { 'name': 'gid', 'type': 'gid' }, { 'Name': 'name', 'type': 'string' }, { 'name': 'nodeAddr', 'type': 'address' } ] };
export const CancelRegister_Abi = { 'type': 'function', 'name': 'CancelRegister', 'inputs': [ { 'name': 'gid', 'type': 'gid' }, { 'name': 'name', 'type': 'string' } ] };
export const Reward_Abi = { 'type': 'function', 'name': 'Reward', 'inputs': [ { 'name': 'gid', 'type': 'gid' }, { 'name': 'name', 'type': 'string' }, { 'name': 'beneficialAddr', 'type': 'address' } ] };

// Vote
export const Vote_Abi = { 'type': 'function', 'name': 'Vote', 'inputs': [ { 'name': 'gid', 'type': 'gid' }, { 'name': 'nodeName', 'type': 'string' } ] };
export const CancelVote_Abi = { 'type': 'function', 'name': 'CancelVote', 'inputs': [{ 'name': 'gid', 'type': 'gid' }] };

// Pledge
export const Pledge_Abi = { 'type': 'function', 'name': 'Pledge', 'inputs': [{ 'name': 'beneficial', 'type': 'address' }] };
export const CancelPledge_Abi = { 'type': 'function', 'name': 'CancelPledge', 'inputs': [ { 'name': 'beneficial', 'type': 'address' }, { 'name': 'amount', 'type': 'uint256' } ] };

// Mintage
export const Mint_Abi = { 'type': 'function', 'name': 'Mint', 'inputs': [ { 'name': 'isReIssuable', 'type': 'bool' }, { 'name': 'tokenId', 'type': 'tokenId' }, { 'name': 'tokenName', 'type': 'string' }, { 'name': 'tokenSymbol', 'type': 'string' }, { 'name': 'totalSupply', 'type': 'uint256' }, { 'name': 'decimals', 'type': 'uint8' }, { 'name': 'maxSupply', 'type': 'uint256' }, { 'name': 'ownerBurnOnly', 'type': 'bool' } ] };
export const Issue_Abi = { 'type': 'function', 'name': 'Issue', 'inputs': [ { 'name': 'tokenId', 'type': 'tokenId' }, { 'name': 'amount', 'type': 'uint256' }, { 'name': 'beneficial', 'type': 'address' } ] };
export const Burn_Abi = { 'type': 'function', 'name': 'Burn', 'inputs': [] };
export const TransferOwner_Abi = { 'type': 'function', 'name': 'TransferOwner', 'inputs': [ { 'name': 'tokenId', 'type': 'tokenId' }, { 'name': 'newOwner', 'type': 'address' } ] };
export const ChangeTokenType_Abi = { 'type': 'function', 'name': 'ChangeTokenType', 'inputs': [{ 'name': 'tokenId', 'type': 'tokenId' }] };
export const Mint_CancelPledge_Abi = { 'type': 'function', 'name': 'CancelPledge', 'inputs': [{ 'name': 'tokenId', 'type': 'tokenId' }] };

// DEX
export const DexFundUserDeposit_Abi = { 'type': 'function', 'name': 'DexFundUserDeposit', 'inputs': [] };
export const DexFundUserWithdraw_Abi = { 'type': 'function', 'name': 'DexFundUserWithdraw', 'inputs': [ { 'name': 'token', 'type': 'tokenId' }, { 'name': 'amount', 'type': 'uint256' } ] };
export const DexTradeCancelOrder_Abi = { 'type': 'function', 'name': 'DexTradeCancelOrder', 'inputs': [ { 'name': 'orderId', 'type': 'bytes' }, { 'name': 'tradeToken', 'type': 'tokenId' }, { 'name': ',quoteToken', 'type': 'tokenId' }, { 'name': 'side', 'type': 'bool' } ] };
export const DexFundNewOrder_Abi = { 'type': 'function', 'name': 'DexFundNewOrder', 'inputs': [ { 'name': 'orderId', 'type': 'bytes' }, { 'name': 'tradeToken', 'type': 'tokenId' }, { 'name': 'quoteToken', 'type': 'tokenId' }, { 'name': 'side', 'type': 'bool' }, { 'name': 'orderType', 'type': 'uint32' }, { 'name': 'price', 'type': 'string' }, { 'name': 'quantity', 'type': 'uint256' } ] };
export const DexFundNewMarket_Abi = { 'type': 'function', 'name': 'DexFundNewMarket', 'inputs': [ { 'name': 'tradeToken', 'type': 'tokenId' }, { 'name': 'quoteToken', 'type': 'tokenId' } ] };

export enum BlockType {
    'CreateContractReq' = 1,
    'TxReq',
    'RewardReq',
    'TxRes',
    'TxResFail'
}

export enum BuiltinTxType {
    'SBPreg' = 0,
    'UpdateReg',
    'RevokeReg',
    'RetrieveReward',
    'Voting',
    'RevokeVoting',
    'GetQuota',
    'WithdrawalOfQuota',
    'Mintage',
    'MintageIssue',
    'MintageBurn',
    'MintageTransferOwner',
    'MintageChangeTokenType',
    'MintageCancelPledge',
    'DexFundUserDeposit',
    'DexFundUserWithdraw',
    'DexFundNewOrder',
    'DexTradeCancelOrder',
    'DexFundNewMarket',
    'CreateContractReq',
    'TxReq',
    'RewardReq',
    'TxRes',
    'TxResFail'
}

export enum LangList {
    'english' = 'english',
    'japanese' = 'japanese',
    'chineseSimplified' = 'chinese_simplified',
    'chineseTraditional' = 'chinese_traditional',
    'french' = 'french',
    'italian' = 'italian',
    'korean' = 'korean',
    'spanish' = 'spanish'
}

export const contractAddrs = {
    Quota: Quota_Addr,
    Vote: Vote_Addr,
    Register: Register_Addr,
    Mintage: Mintage_Addr,
    DexFund: DexFund_Addr,
    DexTrade: DexTrade_Addr
};

export const abiFuncSignature = {
    Register: encodeFunctionSignature(Register_Abi),
    UpdateRegistration: encodeFunctionSignature(UpdateRegistration_Abi),
    CancelRegister: encodeFunctionSignature(CancelRegister_Abi),
    Reward: encodeFunctionSignature(Reward_Abi),
    Vote: encodeFunctionSignature(Vote_Abi),
    CancelVote: encodeFunctionSignature(CancelVote_Abi),
    Pledge: encodeFunctionSignature(Pledge_Abi),
    CancelPledge: encodeFunctionSignature(CancelPledge_Abi),
    Mint: encodeFunctionSignature(Mint_Abi),
    Issue: encodeFunctionSignature(Issue_Abi),
    Burn: encodeFunctionSignature(Burn_Abi),
    TransferOwner: encodeFunctionSignature(TransferOwner_Abi),
    ChangeTokenType: encodeFunctionSignature(ChangeTokenType_Abi),
    Mint_CancelPledge: encodeFunctionSignature(Mint_CancelPledge_Abi),
    DexFundUserDeposit: encodeFunctionSignature(DexFundUserDeposit_Abi),
    DexFundUserWithdraw: encodeFunctionSignature(DexFundUserWithdraw_Abi),
    DexFundNewOrder: encodeFunctionSignature(DexFundNewOrder_Abi),
    DexTradeCancelOrder: encodeFunctionSignature(DexTradeCancelOrder_Abi),
    DexFundNewMarket: encodeFunctionSignature(DexFundNewMarket_Abi)
};

export const methods = _methods;
