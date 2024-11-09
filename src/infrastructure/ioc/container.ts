import { Container } from 'inversify';
import { TYPES } from '../../interfaces/types';
import NoteRepo from '../database/note.repo';
import NoteService from '../../application/note.service';
import LoggerDev from '../logger/logger.dev';
import LoggerProd from '../logger/logger.prod';

const container = new Container();

// Bind the NoteRepo class to the TYPES.NoteRepo identifier.
// This means that whenever TYPES.NoteRepo is requested, an instance of NoteRepo will be provided.
if (process.env.NODE_ENV === 'development') {
  container.bind<LoggerDev>(TYPES.Logger).to(LoggerDev);
} else {
  container.bind<LoggerProd>(TYPES.Logger).to(LoggerProd);
}
container.bind<NoteRepo>(TYPES.NoteRepo).to(NoteRepo);
// Bind the NoteService class to itself using the TYPES.NoteService identifier.
// This means that whenever TYPES.NoteService is requested, an instance of NoteService will be provided.
// The 'toSelf' method is used when the class itself is the implementation.
container.bind<NoteService>(NoteService).toSelf();

// Retrieve an instance of NoteService from the Inversify container.
// The container resolves the dependencies and provides the instance bound to TYPES.NoteService.
export const noteService = container.get<NoteService>(NoteService);
