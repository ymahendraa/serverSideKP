module.exports = (sequelize, Sequelize) => {
    const Device = sequelize.define("device", {
      device_id:{
        type: Sequelize.INTEGER(5),
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
      },
      user_id:{
        type: Sequelize.INTEGER(5),
        allowNull:false,
        references:{
          model: 'users',
          key: 'user_id'
        }
      },
      device_name: {
        type: Sequelize.STRING(13),
        allowNull:true
      },
      temperature: {
        type: Sequelize.STRING(3),
        allowNull:true
      },
    });
  
    Device.associate = (models) =>{
      device.belongsTo(models.users,{ foreignKey:'user_id' });
    }

    return Device;
  };