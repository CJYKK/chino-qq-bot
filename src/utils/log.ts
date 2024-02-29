import log4js from 'log4js'

enum Log_File_Path {
    CURRENT = 'logs/current.log',
    DB = 'logs/db.log'
}

log4js.configure({
    appenders: {
        currentConsole: {
            type: 'stdout',
            layout: {
                type: 'pattern',
                pattern: '[%d{MM/dd hh:mm:ss}] [%[%p%]] %m'
            }
        },
        currentFile: {
            type: 'file',
            filename: Log_File_Path.CURRENT,
            layout: {
                type: 'pattern',
                pattern: '%d %p %m'
            }
        },
        dataBaseQueryLog: {
            type: 'file',
            filename: Log_File_Path.DB,
            layout: {
                type: 'pattern',
                pattern: '%d %p %m'
            }
        },
        apiOnlyFile: {
            type: 'file',
            filename: 'logs/api.log',
            layout: {
                type: 'pattern',
                pattern: '%d %p %m'
            }
        }
    },
    categories: {
        default: {
            appenders: ['currentConsole', 'currentFile'],
            level: 'info'
        },
        db: {
            appenders: ['dataBaseQueryLog'],
            level: 'all'
        },
        api: {
            appenders: ['currentConsole', 'apiOnlyFile', 'currentFile'],
            level: 'all'
        }
    }
})

const logger = log4js.getLogger('default')

export default logger

export const dbLogger = log4js.getLogger('db')

export const apiLogger = log4js.getLogger('api')
