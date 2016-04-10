var express = require('express'),
	
	port = process.env.PORT || 3000,
	multer = require('multer'),
	app = express();


app.use(express.static(__dirname + '/public'));

var fileRouter = require('./routers/files.js');
app.use('/',fileRouter);


app.get('/',function (req,res) {
	res.redirect('views/index.html');
});

app.listen(port,function(){
	console.log('server is running on port ' + port);
})