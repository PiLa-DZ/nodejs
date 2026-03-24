const winston = require('winston')

const logger = winston.createLogger({
	level: 'info',
	transports: [
		new winston.transports.Console({
			format: winston.format.cli(),
			level: 'warn'
		}),
		new winston.transports.File({
			filename: 'app.log',
			format: winston.format.json(),
			level: 'error'
		})
	]
})

console.clear()

logger.error('This is (Error)')
logger.warn('This is (Warn)')
logger.info('This is (Info)')

// NOTE:
// Transports --> Console
// Transports --> File
