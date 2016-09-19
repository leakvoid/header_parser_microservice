
var express = require('express');
var app = express();
var useragent = require('useragent');

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    var ip = req.connection.remoteAddress ||
	req.headers["x-forwarded-for"] ||
	req.socket.remoteAddress ||
	req.connection.socket.remoteAddress;
    console.log("IP_address: " + ip);

    var language = req.headers["accept-language"];
    console.log("Language: " + language);

    var agent = useragent.parse(req.headers["user-agent"]);
    console.log("OS: " + agent.os.toString());

    res.json({"IP_address: ": ip,
	     "Language: ": language,
	     "OS: ": agent.os.toString()});
});

app.listen(port, function() {
    console.log('App started at port: ' + port);
});
