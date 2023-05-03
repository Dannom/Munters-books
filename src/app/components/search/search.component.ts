import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchFormControl: FormControl = new FormControl('');
  sub: Subscription = new Subscription();

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
     this.sub.add(this.searchFormControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => {
      this.booksService.filterBooks(value);
     }));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
