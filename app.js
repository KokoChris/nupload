var express = require('express'),
	bodyParser = require('body-parser'),
	port = process.env.PORT || 3000
	app = express();


app.get('/',function (req,res) {
	res.send("hey from root");
});

app.listen(port,function(){
	console.log('server is running on port ' + port);
})