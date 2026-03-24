/*
 * winston.createLogger
	 * level: 
		 * 'error'
		 * 'warn'
		 * 'info'
		 * 'http'
		 * 'verbose'
		 * 'debug'
		 * 'silly'
	 * format:winston.format
		 * winston.format.json
		 * winston.format.simple
		 * winston.format.cli
		 * winston.format.combine
			 * winston.format.errors
			 * winston.format.timestamp
			 * winston.format.colorize
			 * winston.format.printf
	 * winston.transporsts
		 * winston.transporsts.Console
			 * level
			 * format
		 * winston.transporsts.File
			 * filename
			 * level
			 * format
*/
const winston = require('winston')

const logger = winston.createLogger({
	level: 'info',
	format: winston.format.json(),
	transports: [
		new winston.transports.Console({
			level: 'http',
			format: winston.format.cli(),
			format: winston.format.combine(
				winston.format.timestamp({format: 'HH:mm'}),
				winston.format.colorize(),
				winston.format.errors({ stack: true}),
				winston.format.printf( 
					i => `>>> ${i.level} ${i.timestamp} ${i.message} <<< ${i.stack || ''}`
				)
			)
		}),
		new winston.transports.File({
			filename: 'app.log',
			level: 'error',
            maxsize: 111, // حجم أقصى للملف (5MB)
            maxFiles: 5, // الاحتفاظ بـ 5 ملفات كحد أقصى
		})
	]
})

console.clear()
// try {
	// throw new Error('This is Error')
// } catch (err) {
	// logger.error('..........................', err)
// }
logger.error('ssssssssssssssssssssssssss')
