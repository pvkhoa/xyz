const { DataTypes } = require('sequelize');
const sequelize = require('../conectdtb');
const Talk = sequelize.define('Talk', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    ten_nv: { type: DataTypes.STRING, allowNull: false },
    cv: { type: DataTypes.STRING, allowNull: false },
    trang_thai: { type: DataTypes.STRING, defaultValue: 'hoat_dong' },
    ngay_tao: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    tableName: 'talk',
    timestamps: false   
});
module.exports = Talk;