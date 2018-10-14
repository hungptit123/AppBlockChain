const { Wallet, CoinType, EthWallet,BchWallet, InfinitoApi, NeoWallet } = require('node-infinito-wallet');
let opts = {
	apiKey: 'f5e63f32-1de9-461d-a748-7a925adbdd55',
    secret: 'E6IrvyVLKbyLqb42WqP16miTUK8wMW9p5HaGVSkGBFjpq071afmUrHes2MAHa0Wi',
	baseUrl: 'https://staging-api-testnet.infinitowallet.io',
	logLevel: 'NONE'
}
///if you have privateKey then supply private key to create wallet or you can pass passphrase to create wallet 
// let keyPr = list['account'+4];
let walletConfig = {
  	coinType: CoinType.ETH.symbol,  
  	isTestNet: true,
  	privateKey: '0x7ab63457a09f347a386eb6c3c83b1dd08cb8b5b7480daed7c0ce7e803ce96db2',
}

// creat wallet first
let api_Wallet = new InfinitoApi(opts);
let wallet = new EthWallet(walletConfig);
wallet.setApi(api_Wallet);
let account = wallet.Account;
// console.log(account['privateKey']);
async function test() {
	let result = await wallet.getBalance();
	console.log(result);
}
test();