const winston = require('winston')
const { combine, timestamp, printf, colorize } = winston.format

const logFormat = combine(
	colorize(),
	timestamp({ format: 'HH:mm' }),
	printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
)

const logger = winston.createLogger({
	level: 'info',
	transports: [
		new winston.transports.Console({ format: logFormat})
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
	// Format --> Errors
