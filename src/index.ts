import { Elysia } from 'elysia';
import { noteService } from './infrastructure/ioc/container';

const app = new Elysia()
  .get('/', () => 'Hello Elysia')
  .get('/notes', async ({ set }) => {
    const notes = await noteService.getAll();
    set.status = 200;
    return notes;
  })
  .get('/notes/:id', async ({ params, set }) => {
    const note = await noteService.getOneById(params.id);
    set.status = 200;
    return note;
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
