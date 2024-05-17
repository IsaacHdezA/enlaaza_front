import { Component, Input, Output, Inject, EventEmitter, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { Pager } from '../../interfaces/pager';
import { PAGER_SERVICE_TOKEN, PagerService } from '../../services/pager/pager.service';

@Component({
  selector: 'app-pager',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pager.component.html',
  styleUrl: './pager.component.css'
})
export class PagerComponent<T> implements OnInit {
  @Input() pager?: Pager<T>;
  @Output() pagerChange = new EventEmitter<Pager<T>>();

  leftAvailable:  boolean = true;
  rightAvailable: boolean = true;

  constructor(@Inject(PAGER_SERVICE_TOKEN) private service: PagerService) {}

  toggleAvailable() {
    this.leftAvailable  = this.pager!.page != 1;
    this.rightAvailable = this.pager!.page != this.pager!.totalPages;
  }

  onClick(page: number): void {
    if(!this.pager) return;

    console.log(`Actual page ${this.pager.page}; Total pages: ${this.pager.totalPages} Trying to get: ${page}`);
    if(this.pager.page >= 0 && this.pager.page <= this.pager.totalPages) {
      this.service.getPage<T>(this.pager.itemsPerPage, page).subscribe(response => {
        this.pager = response;
        this.pagerChange.emit(this.pager);

        this.toggleAvailable();
      });
    }
  }

  onEnterKey(event: any) {
    const value = event.target.value as number;
    let inputPage: number;

    if(value < 0) inputPage = -value < this.pager!.totalPages ? -value : this.pager!.page;
    else inputPage = value  < this.pager!.totalPages ? value : this.pager!.page;

    this.onClick(inputPage);
  }

  ngOnInit(): void {
    this.toggleAvailable();
  }
}
