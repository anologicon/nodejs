var http = require('http');

var operadoras = [
	{nome: "Vivo", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo:41, categoria: "Celular", preco: 3}
];

var contatos = [
	[{id: 1, nome: "Bruno", telefone:"9999-9999", data: new Date(), operadora: operadoras[0]}],
	[{id: 2, nome: "Sandra", telefone:"8888-8888", data: new Date(), operadora: operadoras[1]}],
	[{id: 3, nome: "Mariana", telefone:"7777-8888", data: new Date(), operadora: operadoras[2]}]
];

http.createServer(function (req, res) {
	
	res.write(JSON.stringify(operadoras));
	if(req.url === '/operadoras') res.write(JSON.stringify(operadoras));
	if(req.url === '/contatos') res.write(JSON.stringify(contatos));
	res.end();

}).listen(2009);