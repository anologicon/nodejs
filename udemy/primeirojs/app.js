var app = require('express')();
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
	res.send('<html><body>Primeira pagina com node e express</body></html>');
});

app.get('/grifinoria', function (req, res) {
	res.render("pontos/grifinoria");
});

app.listen(3000, function () {
	console.log('Servidor rodando express');
});

