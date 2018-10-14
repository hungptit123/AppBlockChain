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
io.on("connection", function(socket){
	console.log("Da co nguoi ket noi: " + socket.id);
	socket.on("disconnect", function(){
		console.log(socket.id + ": ngat ket noi");
	});
	socket.on("client_login", function(data){
		console.log('create account wallet successful: (user la):  '+ data);
	});
	socket.on()
});

app.get("/", function (req, res) {
	res.render("trangchu");
}); 