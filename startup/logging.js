const winston = require('winston');
// require('winston-mongodb');
require('express-async-errors');


const logger = winston.createLogger({
    transports: [
        new winston.transports.File({
            handleExceptions: true,
            filename: 'error.log',
            level: 'error',
            format: winston.format.json()
        }),       
        new winston.transports.Console({
            handleExceptions: true,
            level: 'info',
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple(),
            )
        })
    ]
});

module.exports = logger;