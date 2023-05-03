import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Book } from 'src/app/interfaces/book.interface';
import { AddEditBookComponent } from 'src/app/modals/add-edit-book/add-edit-book.component';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor (private booksService: BooksService, private modalService: NgbModal) {

  }

  ngOnInit(): void {
    this.booksService.getData();
    this.books$ = this.booksService.books$;
  }

  onAdd(): void {
    this.modalService.open(AddEditBookComponent);
  }

}
