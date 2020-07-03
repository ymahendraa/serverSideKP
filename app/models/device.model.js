module.exports = (sequelize, Sequelize) => {
    const Device = sequelize.define("device", {
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Device;
  };