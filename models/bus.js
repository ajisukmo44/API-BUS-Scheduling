module.exports = (sequelize, DataTypes) => {
  const Bus = sequelize.define("Bus", {
    nopol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    namaBus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kapasitas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fasilitas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fotoBus: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  Bus.associate = (models) => {
    Bus.hasMany(models.JadwalBus, {
      onDelete: "cascade",
    });
  };
  
  Bus.init({
    nopol: DataTypes.STRING,
    namaBus: DataTypes.STRING,
    kapasitas: DataTypes.INTEGER,
    fasilitas: DataTypes.STRING,
    fotoBus: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Bus',
  });
  return Bus;
};