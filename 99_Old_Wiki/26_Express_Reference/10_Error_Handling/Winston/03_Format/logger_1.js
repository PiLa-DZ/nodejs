const winston = require('winston')

const logger = winston.createLogger({
	level: 'error',
	transports: [
		new winston.transports.Console({
			format: winston.format.json(),
		}),
		new winston.transports.Console({
			format: winston.format.simple(),
		}),
		new winston.transports.Console({
			format: winston.format.cli(),
		}),
	]
})

console.clear()

logger.error('This is (Error)')

// NOTE:
// Format --> Json
// Format --> Simple
// Format --> Cli
// Format --> Combine
	// Format --> Timestamp
	// Format --> Printf
	// Format --> Colorize
