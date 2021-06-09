'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Colecao = sequelize.define('Colecao',{
		idItem: {
			field: 'idItem',
			type: DataTypes.INTEGER,
            primaryKey: true,
			autoIncrement: true,
            allowNull: false
		},		
		user: {
			field: 'fkUsuario',
			type: DataTypes.INTEGER,
            foreignKey: true,
			allowNull: false
		},
		nomeMiniatura: {
			field: 'nomeItem',
			type: DataTypes.STRING,
			allowNull: false
		},
		data: {
			field: 'dataLanc',
			type: DataTypes.DATE,
			allowNull: false
		},
		colec: {
			field: 'colecao',
			type: DataTypes.STRING,
			allowNull: false
		},
		valor: {
			field: 'valor',
			type: DataTypes.STRING,
			allowNull: false
		},
	}, 
	{
		tableName: 'colecionador', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Colecao;
};


// 