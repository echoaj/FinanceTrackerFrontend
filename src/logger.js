import { createLogger, format, transports } from "winston";
const { combine, timestamp, printf } = format;


const customFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level.toUpperCase()}: ${message}`;
});

const logger = createLogger({
    level: "debug",

    transports: [
        new transports.Console({
            colorize: true,
            format: combine(timestamp({ format: 'MM/DD/YYYY hh:mm:ss: ' }), customFormat),
        }),
        new transports.Http({
            'host': 'logging-service-py.herokuapp.com', 'path': '/api/logger',
            format: combine(timestamp({ format: 'MM/DD/YYYY hh:mm:ss' }), customFormat),
        })
        // new transports.File({ filename: 'combined.log', level: 'debug' })
    ]
});

export default logger;