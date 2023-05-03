import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BooksData } from '../interfaces/api-data.interface';
import { Book, BookInfo } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  readonly url = "https://www.googleapis.com/books/v1/volumes?q=find&startIndex=1&maxResults=40";
  booksSubject: Subject<Book[]> = new Subject<Book[]>();
  books$: Observable<Book[]> = this.booksSubject.asObservable();
  books: Book[];

  constructor(private http: HttpClient) { }

  getData(): void {
    if (!this.books) {
      this.http.get<BooksData>(this.url).subscribe((booksData: BooksData) => {
        // ideally i would map the books to an object for performance puropses
        this.books = booksData.items;
        this.booksSubject.next(this.books)
      })
    } else {
      this.booksSubject.next(this.books);
    }
  }

  filterBooks(term: string): void {
    const filteredBooks = this.books.filter(book => {
      return book.volumeInfo?.title.toLowerCase().includes(term.toLowerCase());
    })
    console.log(filteredBooks);
    this.booksSubject.next(filteredBooks);
  }

  deleteBookById(bookId: string): void {
    const bookIndex = this.books.findIndex(book => book.id === bookId);
    this.books.splice(bookIndex, 1);
    this.booksSubject.next(this.books);
  }

  updateBook(bookToUpdate: Book): void {
    const bookIndex = this.books.findIndex(book => book.id === bookToUpdate.id);
    this.books.splice(bookIndex, 1, bookToUpdate);
    this.booksSubject.next(this.books);
  }

  addBook(bookData: BookInfo): void {
    const bookToAdd: Book = {id: '123', volumeInfo: bookData};
    this.books.push(bookToAdd);
    this.booksSubject.next(this.books);
  }
}
