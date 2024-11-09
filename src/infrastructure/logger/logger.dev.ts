import WinstonLogger from '../../utils/winston';

class LoggerDev {
  info(message: string) {
    WinstonLogger.info('Logger Dev', message);
  }
}

export default LoggerDev;
