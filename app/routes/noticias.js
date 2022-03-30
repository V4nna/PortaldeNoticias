module.exports=function(app){
	app.get('/noticia', function(req,res){ //ó o function sinal q tem parametroo

	const dbConnection=require('../../config/dbConnection');
	const connection=dbConnection();
	connection.query('select * from noticias', function(error, result){
		if (error){
			console.log(error);
		}
		res.render('noticias/noticias.ejs', {noticias: result});
	});
};
	
