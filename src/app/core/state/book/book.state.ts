import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { GetBookList } from './book.action';
import { BookService } from './book.service';
import { BookList } from '@core/models/book.model';

export interface BookStateModel {
  bookList: BookList[];
}

@State<BookStateModel>({
  name: 'book',
  defaults: {
    bookList: [],
  }
})
@Injectable()
export class BookState {

  constructor(
    private bookService: BookService,
  ) { }

  @Action(GetBookList)
  GetTodoList(ctx: StateContext<BookStateModel>) {
    const bookList = this.bookService.getTodoList();
    const state = ctx.getState();       // 取得目前 state 值
    ctx.setState({                      // 重新設定 state 值
      ...state,
      bookList: bookList,
    });
  }

}
