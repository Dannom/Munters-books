import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Book } from 'src/app/interfaces/book.interface';
import { ConfirmationComponent } from 'src/app/modals/confirmation/confirmation.component';
import { AddEditBookComponent } from 'src/app/modals/add-edit-book/add-edit-book.component';
import { SeeMoreComponent } from 'src/app/modals/see-more/see-more.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {
  @Input() book: Book;

  constructor(private modalService: NgbModal) {

  }

  onEdit(): void {
    const modalRef = this.modalService.open(AddEditBookComponent);
    modalRef.componentInstance.book = this.book;
  }

  onDelete(): void {
    const modalRef = this.modalService.open(ConfirmationComponent);
    modalRef.componentInstance.book = this.book;
  }

  onBookSeeMore(): void {
    const modalRef = this.modalService.open(SeeMoreComponent);
    modalRef.componentInstance.book = this.book;
  }

}
