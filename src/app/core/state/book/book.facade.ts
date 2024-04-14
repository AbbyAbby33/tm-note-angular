import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetBookList } from './book.action';
import { Observable } from 'rxjs';
import { BookList } from '@core/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookFacade {

  @Select('book.bookList') bookList!: Observable<BookList[]>;
  
  constructor(private store: Store) { }

  getBookList() {
    this.store.dispatch(new GetBookList());
  }
}
