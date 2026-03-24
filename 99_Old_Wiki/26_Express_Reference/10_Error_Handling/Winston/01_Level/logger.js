const winston = require('winston')

const logger = winston.createLogger({
	level: 'info',
	transports: [
		new winston.transports.Console()
	]
})

console.clear()

logger.error('This is (Error)')
logger.warn('This is (Warn)')
logger.info('This is (Info)')
logger.http('This is (Http)') // This not work

// NOTE:
// Level 0 --> Error
// Level 1 --> Warn
// Level 2 --> Info
// Level 3 --> Http
// Level 4 --> Verbose
// Level 5 --> Debug
// Level 6 --> Silly
