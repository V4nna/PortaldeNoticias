const mysql=require('mysql');

modulo.exports=function(){
	return mysql.createConnection({
		host:'localhost',
		user: 'root',
		password: 'ifms',//a confusão de milhões
		database: 'portal_noticias'
	});
}