module.exports = (sequelize, DataTypes) => {
  const terminalRute = sequelize.define("terminalRute", {
    terminalAsal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    terminalTujuan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deskripsi: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  terminalRute.associate = (models) => {
    terminalRute.hasMany(models.JadwalBus, {
      onDelete: "cascade",
    });
  };

  return terminalRute;
};