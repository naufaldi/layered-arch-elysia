import { injectable } from 'inversify';
import WinstonLogger from '../../utils/winston';
import 'reflect-metadata';
@injectable()
class LoggerDev {
  info(message: string) {
    WinstonLogger.info('Logger Dev', message);
  }
}

export default LoggerDev;
