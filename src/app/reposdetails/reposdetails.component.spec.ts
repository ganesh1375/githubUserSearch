import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposdetailsComponent } from './reposdetails.component';

describe('ReposdetailsComponent', () => {
  let component: ReposdetailsComponent;
  let fixture: ComponentFixture<ReposdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReposdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
