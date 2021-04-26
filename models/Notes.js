const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Notes extends Model { };

Notes.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Post",
                key: "id",
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "User",
                key: "id",
            }
        }
    },
    {
        sequelize,
        modelName: 'notes',
    }
);

module.exports = Notes;