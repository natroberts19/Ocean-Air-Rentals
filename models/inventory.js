module.exports = function(sequelize, DataTypes) {
    var Newinventory = sequelize.define("Newinventory", {
        beach: DataTypes.STRING,
        rentalitem: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        rentable: DataTypes.BOOLEAN
    })

    return Newinventory;
}