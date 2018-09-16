'use strict';

module.exports = (sequelize, DataTypes) => {
  var Agency = sequelize.define('Agency', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    class_name: DataTypes.STRING
  }, {});

  Classroom.associate = function(models) {
    Classroom.hasMany(models.Agency, {
      foreignKey: 'unique_id',
      as: 'agency',
    });
  };

  return Agency;
};
