import NoteRepo from '../infrastructure/database/note.repo';
import LoggerDev from '../infrastructure/logger/logger.dev';
import LoggerProd from '../infrastructure/logger/logger.prod';

class NoteService {
  // using dependencies injection
  private noteRepo: NoteRepo;
  private logger: LoggerDev | LoggerProd;

  constructor(noteRepo: NoteRepo, logger: LoggerDev | LoggerProd) {
    this.noteRepo = noteRepo;
    this.logger = logger;
  }

  getAll() {
    this.logger.info('get all notes');
    return this.noteRepo.getAll();
  }
  getOneById(id: string) {
    this.logger.info('get one note by id');
    // business logic
    return this.noteRepo.getOneById(id);
  }
}

export default NoteService;
