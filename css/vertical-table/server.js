var express = require('express');
var app = express();

var db = (function(){
	var arr = [];
	
	for(var i = 0; i < 1000; i++) {
		arr.push(
			{
				columName: 'Колонка таблицы № '+i,
				columValue: 'Какое-то важное значение '+i
			}
		);
	}
	
	return arr;
})();



app.use(express.static(__dirname + '/js'));

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index', {data: db});
});

app.listen(3000,function(){
  console.log("Хозяин, я слушаю 3000 порт, пока все чисто!");
});