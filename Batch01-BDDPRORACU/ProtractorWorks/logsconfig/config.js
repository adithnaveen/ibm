// this statement can be directly written in any specs file 
// we are doing it for better usability 

var winston = require("winston");

winston.add(winston.transports.File, { filename: './logs/loginupdate.log' });
winston.remove(winston.transports.Console);


module.exports =  winston; 