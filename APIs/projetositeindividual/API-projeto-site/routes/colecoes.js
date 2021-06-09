var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Colecao = require('../models').Colecao;


router.get('/getCollections/:idUser', (req, res, next) =>{
    var idUser = req.params.idUser
    var sqlQuery = `select * from colecionador where fkUsuario = ${idUser};`

    sequelize.query(sqlQuery, {
        model: Colecao,
        mapToModel: true
    }).then(response =>{
        res.send(response)
    })
})

router.post('/registrar/:fkUsuario', function(req, res, next) {
	console.log('Criando um usuário');
	
	Colecao.create({
        user : req.params.fkUsuario,
		nomeMiniatura : req.body.nomeMiniatura,
		data : req.body.data,
		colec : req.body.colec,
		valor : req.body.valor
	}).then(resultado => {
		console.log(`Item cadastrado com sucesso: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

module.exports = router