import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetNoteList } from './note.action';
import { Observable } from 'rxjs';
import { NoteList } from '@core/models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteFacade {

  @Select('note.noteList') noteList!: Observable<NoteList[]>;
  
  constructor(private store: Store) { }

  getNoteList(key: string) {
    this.store.dispatch(new GetNoteList(key));
  }
}
