import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Book } from 'src/app/interfaces/book.interface';


@Component({
  selector: 'app-see-more',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.scss']
})
export class SeeMoreComponent {
  book: Book;

  constructor(public activeModal: NgbActiveModal){}

}
