const winston = require('winston')

const logFormat = winston.format.combine(
	winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
	winston.format.printf( 
		info => `${info.timestamp} ${info.level}: ${info.message}`
	),
)

const logger = winston.createLogger({
	level: 'info',
	transports: [
		new winston.transports.Console({
			format: winston.format.combine(
				winston.format.colorize(),
				logFormat
			)
		}),
	]
})

console.clear()

logger.error('This is (Error)')
logger.warn('This is (Warn)')
logger.info('This is (Info)')

// NOTE:
// Format --> Json
// Format --> Simple
// Format --> Cli
// Format --> Combine
	// Format --> Timestamp
	// Format --> Printf
	// Format --> Colorize
