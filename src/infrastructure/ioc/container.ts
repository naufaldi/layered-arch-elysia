import NoteService from '../../application/note.service';
import NoteRepo from '../database/note.repo';
import LoggerDev from '../logger/logger.dev';
import LoggerProd from '../logger/logger.prod';

const noteRepo = new NoteRepo();
const loggerDev = new LoggerDev();
const loggerProd = new LoggerProd();

const logger = process.env.NODE_ENV === 'development' ? loggerProd : loggerDev;
// using dependencies injection
const noteService = new NoteService(noteRepo, logger);

export { noteService };
