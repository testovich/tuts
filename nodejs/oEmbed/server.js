var express = require('express');
var oembed 	= require('oembed-auto');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/js'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/',function(req,res,next){
  res.sendFile(__dirname + '/index.html');
});

app.post('/get_info',function(req,res){
    oembed(req.body.data, function(error, result) {
        if (error)
            res.json({"error" : true, "link" :req.body.data});
        else
            res.json(result);
    });
});

app.listen(3000,function(){
  console.log("Хозяин, я слушаю 3000 порт, пока все чисто!");
});