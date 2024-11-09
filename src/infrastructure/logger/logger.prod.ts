import WinstonLogger from '../../utils/winston';

class LoggerProd {
  info(message: string) {
    WinstonLogger.info('Logger Prod', message);
  }
}

export default LoggerProd;
