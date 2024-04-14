import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookList } from '@core/models/book.model';
import { BookFacade } from '@core/state/book/book.facade';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss'
})
export class NoteListComponent implements OnInit {
  bookList: BookList[] = [];

  bookTitle = 'Angular';

  bookMenuList = [
    {
      subTitle: '基礎',
      list: [
        { id: '20240406001', title: 'Angular專案配置', category: 'principle' },
        { id: '20240406001', title: 'Route', category: 'principle' },
        { id: '20240406002', title: 'Guard', category: 'principle' },
        { id: '20240406003', title: 'Standalone Project', category: 'principle' }
      ]
    },
    {
      subTitle: '狀態管理：Ngxs',
      list: [
        { id: '20240406004', title: 'Ngxs簡介', category: 'principle' },
      ]
    }
  ];

  constructor(private bookFacade: BookFacade) { }

  ngOnInit() {
    this.bookFacade.getBookList();
    this.bookFacade.bookList.subscribe(value => {
      this.bookList = value;
    })
  }
}
