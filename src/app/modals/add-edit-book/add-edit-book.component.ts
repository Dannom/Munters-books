import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import { Book } from 'src/app/interfaces/book.interface';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-add-edit-book',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.scss'],
})
export class AddEditBookComponent implements OnInit {
  book: Book;
  bookForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.populateForm();
  }

  buildForm(): void {
    // for prod puropses i would add validatios message and not only red border
    this.bookForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      authors: new FormControl('', [Validators.required]),
      publisher: new FormControl('', [Validators.required]),
      publishedDate: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  populateForm(): void {
    if (this.book) {
      this.bookForm.patchValue(this.book.volumeInfo);
      this.bookForm
        .get('authors')
        ?.patchValue(this.book.volumeInfo.authors?.join(', '));
    }
  }

  onSave(): void {
    if (this.bookForm.invalid) {
      return
    };
    if (this.book) {
      const newBookInfo = {
        ...this.book.volumeInfo,
        ...this.bookForm.getRawValue(),
        authors: this.bookForm.getRawValue().authors.split(',')
      };
      const bookToUpdate = { ...this.book };
      bookToUpdate.volumeInfo = newBookInfo;
      this.booksService.updateBook(bookToUpdate);
    } else {
      const newBookData = {
        ...this.bookForm.getRawValue(),
        authors: this.bookForm.getRawValue().authors.split(',')
      };
      this.booksService.addBook(newBookData);
    }
    this.activeModal.close('Close click');
  }
}
