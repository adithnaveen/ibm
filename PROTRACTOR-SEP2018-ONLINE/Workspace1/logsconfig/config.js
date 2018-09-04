var winston = require("winston");

// winston.add(winston.transports.Console); 
winston.addColors(winston.transports.Console, {timestamp:true});
winston.add(winston.transports.File, {filename: './logs/sample.log'});


module.exports = winston; 