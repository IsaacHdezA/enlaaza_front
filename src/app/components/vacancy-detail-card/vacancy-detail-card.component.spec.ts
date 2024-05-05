import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyDetailCardComponent } from './vacancy-detail-card.component';

describe('VacancyDetailCardComponent', () => {
  let component: VacancyDetailCardComponent;
  let fixture: ComponentFixture<VacancyDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacancyDetailCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacancyDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
