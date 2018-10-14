for (var i=0; i<=30; i++) {

const { Wallet, CoinType, EthWallet,BchWallet, InfinitoApi, NeoWallet } = require('node-infinito-wallet');
let opts = {
  apiKey: 'f5e63f32-1de9-461d-a748-7a925adbdd55',
  secret: 'E6IrvyVLKbyLqb42WqP16miTUK8wMW9p5HaGVSkGBFjpq071afmUrHes2MAHa0Wi',
  baseUrl: 'https://staging-api-testnet.infinitowallet.io',
  logLevel: 'NONE'
}

///if you have privateKey then supply private key to create wallet or you can pass passphrase to create wallet 
let walletConfig = {
  coinType: CoinType.ETH.symbol,  
  isTestNet: true,
  // privateKey: '0xa6a6b52c7971f4c9314230c9237d6d8214c8c1cbaad20062fc397bdd42f3ee56',
}

// creat wallet first
let api_Wallet = new InfinitoApi(opts);
let wallet = new EthWallet(walletConfig);
wallet.setApi(api_Wallet);
let account = wallet.Account;
console.log(account['privateKey']);
// async function test() {
// 	let result = await wallet.getBalance();
// 	console.log(result);
// }
// test();
}
// 0x80a12860d71cdb2ee02a04f8e00e768f4e315d718b0915f1edf13f15abfb35ca