import { Injectable } from '@angular/core';
import { BookList } from '@core/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // 如果以後有做後端，這裡就是打api
  readonly _bookList: BookList[] = [
    {
      name: '前端',
      list: [
        { name: 'Angular', key: 'angular' }
      ]
    },
    {
      name: '後端',
      list: [
        { name: 'Node.js', key: 'nodejs' },
        { name: 'C#', key: 'csharp' },
      ]
    }
  ];

  constructor() { }

  getTodoList() {
    return this._bookList;
  }
}
