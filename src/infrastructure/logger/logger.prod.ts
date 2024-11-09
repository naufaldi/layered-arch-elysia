import { injectable } from 'inversify';
import WinstonLogger from '../../utils/winston';
import 'reflect-metadata';
@injectable()
class LoggerProd {
  info(message: string) {
    WinstonLogger.info('Logger Prod', message);
  }
}

export default LoggerProd;
