import { injectable } from 'inversify';
import { INote } from '../../interfaces/entities';
import { Note } from '../../interfaces/entities';
//  for read the metadata
import 'reflect-metadata';
import { prisma } from '../../utils/prisma';

// using inversify for injectable
@injectable()
class NoteRepo implements INote {
  async getAll(): Promise<Note[]> {
    // logic how you get data from DB
    // get data from prisma
    // create from prisma
    return await prisma.note.findMany();
  }

  async getOneById(id: number): Promise<Note | null> {
    // logic how you get data from DB
    // get data from prisma
    return await prisma.note.findUnique({
      where: {
        id,
      },
    });
  }

  async create(data: Omit<Note, 'id'>): Promise<Note> {
    // logic how you create data to DB
    // create data to prisma
    return {} as Note;
  }

  async update(id: string, data: Partial<Note>): Promise<Note> {
    // logic how you update data to DB
    // update data to prisma
    return {} as Note;
  }

  async delete(id: string): Promise<void> {
    // logic how you delete data to DB
    // delete data to prisma
  }
}

export default NoteRepo;
