'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('JadwalBuses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tanggal: {
        type: Sequelize.DATE
      },
      terminalRuteId: {
        type: Sequelize.INTEGER
      },
      busId: {
        type: Sequelize.INTEGER
      },
      jamBerangkat: {
        type: Sequelize.TIME
      },
      jamSampai: {
        type: Sequelize.TIME
      },
      etimasiWaktuPerjalanan: {
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('JadwalBuses');
  }
};