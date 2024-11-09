export interface Note {
  id: number;
  isDone: boolean;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface INote {
  getAll: () => Promise<Note[]>;
  getOneById: (id: number) => Promise<Note | null>;
  create: (data: Omit<Note, 'id'>) => Promise<Note>;
  update: (id: number, data: Partial<Note>) => Promise<Note>;
  delete: (id: number) => void;
}
