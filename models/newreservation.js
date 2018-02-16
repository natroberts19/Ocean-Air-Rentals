module.exports = function(sequelize, DataTypes) {
    var Newreservation = sequelize.define("Newreservation", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        beach: DataTypes.STRING,
        rentalitem: DataTypes.STRING,
        rentaldate: DataTypes.STRING
    })

    return Newreservation;
}