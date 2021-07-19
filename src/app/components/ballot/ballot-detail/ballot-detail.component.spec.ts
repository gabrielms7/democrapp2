import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallotDetailComponent } from './ballot-detail.component';

describe('BallotDetailComponent', () => {
  let component: BallotDetailComponent;
  let fixture: ComponentFixture<BallotDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallotDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
