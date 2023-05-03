import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Book } from 'src/app/interfaces/book.interface';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {
  book: Book;

  constructor(public activeModal: NgbActiveModal, private booksSerivce: BooksService){}

  onDelete(): void {
    this.booksSerivce.deleteBookById(this.book.id);
    this.activeModal.close('Close click');
  }

}
