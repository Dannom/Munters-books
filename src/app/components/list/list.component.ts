import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Book } from 'src/app/interfaces/book.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() books: Book[] = [];
  page: number = 1;
  pageSize: number= 10;

  trackByFn(index: number, item: Book) {
    if(!item) return null;
    return item && item.id;
}

}
