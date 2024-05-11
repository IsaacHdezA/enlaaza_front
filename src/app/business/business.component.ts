import { Component, OnInit } from '@angular/core';
import { Business } from '../interfaces/business';

import { BusinessService } from '../services/business/business.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [],
  templateUrl: './business.component.html',
  styleUrls: ['../app.component.css', './business.component.css']
})
export class BusinessComponent implements OnInit {
  id: number | null = null;
  business: Business | null = null;

  constructor(
    private businessService: BusinessService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  getBusiness(id: number): void {
    this.businessService.getBusinessById(id).subscribe(response => {
      this.business = response;

      if(!this.business) this.router.navigate(["**"]);
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as number | null;
    this.getBusiness(this.id as number);
  }
}
