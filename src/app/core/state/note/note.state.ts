import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { GetNoteList } from './note.action';
import { NoteService } from './note.service';
import { NoteList } from '@core/models/note.model';

export interface NoteStateModel {
  noteList: NoteList[];
}

@State<NoteStateModel>({
  name: 'note',
  defaults: {
    noteList: [],
  }
})
@Injectable()
export class NoteState {

  constructor(
    private noteService: NoteService,
  ) { }

  @Action(GetNoteList)
  getNoteList(ctx: StateContext<NoteStateModel>, { key }: GetNoteList) {
    const noteList = this.noteService.getNoteList(key);
    const state = ctx.getState();       // 取得目前 state 值
    ctx.setState({                      // 重新設定 state 值
      ...state,
      noteList: noteList,
    });
  }

}
