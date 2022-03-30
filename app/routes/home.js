module.exports=function(app){ //rota de home 

	app.get('/', function(req, res){
		res.render('home/index.ejs');
	});

}