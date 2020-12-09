var express = require('express');

/////-----------------------------------
//app.get( '/', homePage );
function homePage(req, res) {
	res.send(" Home controller !!! ");
}

/// --- EXports
module.exports = homePage;

