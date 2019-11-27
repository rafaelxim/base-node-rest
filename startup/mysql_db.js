// Username: 0lk6GfpdCT
// Database name: 0lk6GfpdCT
// Password: SjtBYK0KbZ
// Server: remotemysql.com
// Port: 3306

module.exports = function () {
    const Sequelize = require('sequelize');

    // Option 1: Passing parameters separately
    const sequelize = new Sequelize('0lk6GfpdCT', '0lk6GfpdCT', 'SjtBYK0KbZ', {
        host: 'remotemysql.com',
        dialect: 'mysql'
    });

    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
}

