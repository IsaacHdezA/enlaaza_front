import { Component, Input, Output, Inject, EventEmitter } from '@angular/core';
import { Pager } from '../../interfaces/pager';
import { PAGER_SERVICE_TOKEN, PagerService } from '../../services/pager/pager.service';

@Component({
  selector: 'app-pager',
  standalone: true,
  imports: [],
  templateUrl: './pager.component.html',
  styleUrl: './pager.component.css'
})
export class PagerComponent<T> {
  @Input() pager?: Pager<T>;
  @Output() pagerChange = new EventEmitter<Pager<T>>();

  constructor(@Inject(PAGER_SERVICE_TOKEN) private service: PagerService) {}

  onClick(page: number): void {
    this.service.getPage<T>(this.pager!.itemsPerPage, page).subscribe(response => {
      this.pager = response;
      this.pagerChange.emit(this.pager);
    });
  }

  onEnterKey(event: any) {
    const value = event.target.value as number;
    const inputPage: number =
    value > 0 ?
      value :
      -value < this.pager!.totalPages ?
        -value :
        this.pager!.totalPages
    ;

    this.onClick(inputPage);
  }
}
