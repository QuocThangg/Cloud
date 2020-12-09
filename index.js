/// INSTALL
/// npm install express  body-parser  cookie-parser multer ejs mongodb mongoose  express-session cookie-session qrcode  qrcode-svg  --save

/// ------------------ Khai báo LIB Thêm Vào để sử dụng
var express = require('express');
var path = require('path');
var app = express();

/// Engine EJS
app.set('views', path.join( __dirname, 'views'));
app.set('view engine', 'ejs');

/// Tham số
const PORT = process.env.PORT || 8080;

/// ------------------ Khai bao cac Folder Tĩnh, Session, Cookies
app.use(express.static('public'));


/////-----------------------------------
app.get( '/', homePage );
function homePage(req, res) {
	res.render("home");
}

var exHome = require('./controllers/home');
app.get( '/ex', exHome );

/////-----------------------------------
app.get( '/ex', homePage );
function homePage(req, res) {
	res.render("home");
}

/////-----------------------------------
app.get( '/login', loginPage );
function loginPage(req, res) {	
	console.log("\n ...", req.query.username, req.query.password);
	res.render("login");
}

/*
	
	accsubmit = {
		username : req.query.username,
		password : req.query.password
	}; 
	//console.log(accsubmit);
	*/

/////-----------------------------------
app.get( '/product', productPage );
function productPage(req, res) {
	res.render("product");
}


/////-----------------------------------
app.get( '/order', orderPage );
function orderPage(req, res) {
	res.render("order");
}

/////-----------------------------------
app.get( '/report', reportPage );
function reportPage(req, res) {
	res.render("report");
}


/////-----------------------------------
app.get( '/admin', adminPage );
function adminPage(req, res) {
	res.render("admin");
}

/////-----------------------------------
app.get( '/manage', managePage );
function managePage(req, res) {
	res.render("manage");
}

/////-----------------------------------
app.get( '/payment', paymentPage );
function paymentPage(req, res) {
	res.render("payment");
}


/////-----------------------------------
app.listen( PORT, 
    () => {
        console.log(" Server running !");
    }
);

///
// 3: Ecosystem Diagram
// 4: giải thích các bước hoạt động ...
// 5: Network Diagram
// 6: Deployment Diagram + Service Diagram 
