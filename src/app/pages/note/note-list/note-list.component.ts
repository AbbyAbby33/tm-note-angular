import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book, BookList } from '@core/models/book.model';
import { NoteList } from '@core/models/note.model';
import { BookFacade } from '@core/state/book/book.facade';
import { NoteFacade } from '@core/state/note/note.facade';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss'
})
export class NoteListComponent implements OnInit {
  bookList: BookList[] = [];
  currentBook: Book | null = null;

  bookTitle = '';
  noteList: NoteList[] = [];

  constructor(
    private bookFacade: BookFacade,
    private noteFacade: NoteFacade,
  ) { }

  ngOnInit() {
    this.getBookList();
  }

  getBookList() {
    this.bookFacade.getBookList();
    this.bookFacade.bookList.subscribe(value => {
      if (value) {
        this.bookList = value;
        this.setBook(value[0]['list'][0]);
      }
    })
  }

  setBook(book: Book) {
    this.currentBook = book;
    this.bookTitle = this.currentBook.name;
    this.getNoteList();
  }

  getNoteList() {
    const key = this.currentBook ? this.currentBook.key : '';
    this.noteFacade.getNoteList(key);
    this.noteFacade.noteList.subscribe(value => {
      if (value) {
        this.noteList = value;
      }
    })
  }

  changeBook(item: Book) {
    this.setBook(item);
  }
}
