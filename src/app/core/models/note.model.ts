export class NoteList {
  subTitle!: string;
  list!: Note[]
}

export class Note {
  id!: string;
  title!: string;
  category!: string;
  fileName?: string;
  createTime?: string;
  updateTime?: string;
}
