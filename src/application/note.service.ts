import NoteRepo from '../infrastructure/database/note.repo';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { TYPES } from '../interfaces/types';
import LoggerDev from '../infrastructure/logger/logger.dev';
import LoggerProd from '../infrastructure/logger/logger.prod';

@injectable()
class NoteService {
  // using dependencies injection
  private noteRepo: NoteRepo;
  private logger: LoggerDev | LoggerProd;
  constructor(
    @inject(TYPES.NoteRepo) noteRepo: NoteRepo,
    @inject(TYPES.Logger) logger: LoggerDev | LoggerProd
  ) {
    this.noteRepo = noteRepo;
    this.logger = logger;
  }

  getAll() {
    this.logger.info('getAll');
    return this.noteRepo.getAll();
  }
  getOneById(id: number) {
    this.logger.info('getOneById');
    return this.noteRepo.getOneById(id);
  }
}

export default NoteService;
