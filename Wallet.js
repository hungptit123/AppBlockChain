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

listPrivateKey = ['0x7e6f4801e4f973573c06ad41c1feb39bc5b888a3efa241f59f118d66b914852c', 
					'0xa69b0c84d2b7344d59ebd79a5862788bc0f75b0ae6725c4a7041b7803c22546e'];

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
  // privateKey: '0x7e6f4801e4f973573c06ad41c1feb39bc5b888a3efa241f59f118d66b914852c',
}

function createWallet(privateKey) {
	walletConfig['privateKey'] = privateKey;
	let api_Wallet = new InfinitoApi(apiConfig);
	let wallet = new EthWallet(walletConfig);
	wallet.setApi(api);
	return wallet;
}

let listWallet = [];
// let listAccount = [];
for (let i=0; i<listPrivateKey.length; i++) {
	let wallet = createWallet(listPrivateKey[i]);
	listWallet.push(wallet);
	// let account = wallet.Account;
	// listAccount.push(account);
}


async function makeTransaction(wallet1, wallet2, value) {
	let account1 = wallet1.Account;
	let account2 = wallet2.Account;
	let result = await wallet1.send({
       	txParams: {
         	to: account2['address'],
         	amount: value,
       	}
    });
    console.log("successful");
	// let balance1 = await wallet1.getBalance();
	// let balance2 = await wallet2.getBalance();
	// console.log(balance1);
	// console.log(balance2);
}

list_send = {};
list_send['shop'] = listWallet[1];
// makeTransaction(listWallet[0], listWallet[1], 100000);

// create server node
let express = require("express");
let app = express();

app.use(express.static("public")); 
// khai bao ejs
app.set("view engine", "ejs");
app.set("views", "./views");
let server = require("http").createServer(app);
// khai bao socket io
server.listen(8000);
let io = require("socket.io")(server);

// 

let check = 0;
let user1 = "";

io.on("connection", function(socket){
	console.log("Da co nguoi ket noi: " + socket.id);
	socket.on("disconnect", function(){
		console.log(socket.id + ": ngat ket noi");
	});
	socket.on("client_login", function(data){
		console.log('create account wallet successful: (user la):  '+ data);
		list_send[data] = listWallet[0];
		let account = list_send[data].Account;
		user1 = data;
	});
	socket.on("client_send_data_user", function(data){
		// data contain user2 and and amount
		let user2 = "shop";
		let amount = 10000;
		makeTransaction(list_send[user1], list_send[user2], amount);
	});
});

app.get("/", function (req, res) {
	res.render("trangchu");
}); 