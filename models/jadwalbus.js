module.exports = (sequelize, DataTypes) => {
  const JadwalBus = sequelize.define("JadwalBus", {
    tanggal: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    terminalRuteId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    busId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jamBerangkat: {
      type: DataTypes.TIME,
      allowNull: false
    },
    jamSampai: {
      type: DataTypes.TIME,
      allowNull: false
    },
    etimasiWaktuPerjalanan: {
      type: DataTypes.TIME,
      allowNull: false
    }
  });

  JadwalBus.associate = (models) => {
    JadwalBus.belongsTo(models.terminalRute, {
      foreignKey: {
        name: 'terminalRuteId',
        allowNull: false,
      },
    });
    JadwalBus.belongsTo(models.Bus, {
      foreignKey: {
        name: 'busId',
        allowNull: false,
      },
    });
  }


  JadwalBus.init({
    tanggal: DataTypes.DATEONLY,
    terminalRuteId: DataTypes.INTEGER,
    busId: DataTypes.INTEGER,
    jamBerangkat: DataTypes.TIME,
    jamSampai: DataTypes.TIME,
    etimasiWaktuPerjalanan: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'JadwalBus',
  });

  return JadwalBus;
};