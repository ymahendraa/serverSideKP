module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        user_id:{
            type: Sequelize.INTEGER(5),
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        user_name: {
            type: Sequelize.STRING(13),
            allowNull:true
        },
        phone_num : {
            type : Sequelize.STRING(13),
            allowNull:true
      }
    });
  
    return User;
  };