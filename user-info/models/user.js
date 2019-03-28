'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName:  DataTypes.STRING,
    email:  DataTypes.STRING,
    mobileNumber:  DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};

// const User = sequelize.query('SELECT * from users',
//   { bind: { status: 'active' }, type: sequelize.QueryTypes.SELECT }
// ).then(projects => {
//   console.log(projects)
// });