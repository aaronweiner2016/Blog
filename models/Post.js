const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Post extends Model { };

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "User",
                key: "id",
            }
        },
        notes_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Notes",
                key: "id",
            }
        },
    },
    {
        sequelize,
        modelName: 'post',
    }

);

module.exports = Post;