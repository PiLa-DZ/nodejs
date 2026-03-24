const winston = require('winston');
require('winston-daily-rotate-file'); 

const dailyFileTransport = new winston.transports.DailyRotateFile({
  filename: 'logs/application-%DATE%.log', 
  datePattern: 'YYYY-MM-DD',
  maxSize: '20m',
  maxFiles: '14d',
  zippedArchive: true,
  level: 'info',
  format: winston.format.json()
});

const logger = winston.createLogger({
  level: 'debug', 
  transports: [ dailyFileTransport ]
});

module.exports = logger;
