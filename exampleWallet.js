// creat API

const InfinitoApi_API = require('node-infinito-api');
const opts = {
    apiKey: 'f5e63f32-1de9-461d-a748-7a925adbdd55',
    secret: 'E6IrvyVLKbyLqb42WqP16miTUK8wMW9p5HaGVSkGBFjpq071afmUrHes2MAHa0Wi',
    baseUrl: 'https://staging-api-testnet.infinitowallet.io',
    logLevel: 'NONE',
    // version: 'v1',
};
const api = new InfinitoApi_API(opts);
const coinAPI = api.ETH;

// create wallets

const { Wallet, CoinType, EthWallet,BchWallet, InfinitoApi, NeoWallet } = require('node-infinito-wallet');
let apiConfig = {
  apiKey: 'f5e63f32-1de9-461d-a748-7a925adbdd55',
  secret: 'E6IrvyVLKbyLqb42WqP16miTUK8wMW9p5HaGVSkGBFjpq071afmUrHes2MAHa0Wi',
  baseUrl: 'https://staging-api-testnet.infinitowallet.io',
  logLevel: 'NONE'
}

///if you have privateKey then supply private key to create wallet or you can pass passphrase to create wallet 
let walletConfig = {
  coinType: CoinType.ETH.symbol,  
  isTestNet: true,
  privateKey: '0x7e6f4801e4f973573c06ad41c1feb39bc5b888a3efa241f59f118d66b914852c',
}

// creat wallet first
let api_Wallet = new InfinitoApi(apiConfig);
let wallet = new EthWallet(walletConfig);
wallet.setApi(api);
let account = wallet.Account;

// create wallet 2

let walletConfig_sec = {
  coinType: CoinType.ETH.symbol,  
  isTestNet: true,
  privateKey: '0xa69b0c84d2b7344d59ebd79a5862788bc0f75b0ae6725c4a7041b7803c22546e'
}
let wallet_sec = new EthWallet(walletConfig_sec);
wallet_sec.setApi(api);
let account_sec = wallet_sec.Account;

// create wallet 3
let walletConfig_3 = {
  coinType: CoinType.ETH.symbol,  
  isTestNet: true,
  // privateKey: '0xa69b0c84d2b7344d59ebd79a5862788bc0f75b0ae6725c4a7041b7803c22546e'
}

const Socket = require('node-infinito-notification');

const options = {
    apiKey: 'f5e63f32-1de9-461d-a748-7a925adbdd55',
    secret: 'E6IrvyVLKbyLqb42WqP16miTUK8wMW9p5HaGVSkGBFjpq071afmUrHes2MAHa0Wi',
    authUrl: 'https://staging-api-testnet.infinitowallet.io/',
    baseUrl: 'https://staging-socket-testnet.infinitowallet.io/v1/inv'
  };

const socket = new Socket(options);

async function test() {
	await socket.connect(() => {
	    let block = socket.Block; 
	    block.subscribe({
	      coins: ['ETH']// Add coin you want to listen when have new block
	    });
	    block.on((data) => {
	      	console.log('socket block', data);

	    });

	    let tx = socket.Tx; 
	    tx.subscribe({
     	 	coins: ['ETH']
    	});
	    tx.on((data) => {
	      	console.log('socket transaction', data);
	    }); 
	    
	    let address = socket.Address; 
    	address.subscribe({
      		coins: [{
	          	coin: 'BCH',
	          	addresses: ['mk1GTLuF89WtiNSHujpWXyHK579AcPc59D']
        	}]
    	});
	    address.on((data) => {
	      console.log('Socket address', data);
	    });
	});	
	
}

async function transac() {
	let result1 = await wallet.transfer(account['address'], account_sec['address'],100000);
    console.log('succesfull');
    test();
}
transac();