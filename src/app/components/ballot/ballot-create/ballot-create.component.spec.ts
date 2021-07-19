import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallotCreateComponent } from './ballot-create.component';

describe('BallotCreateComponent', () => {
  let component: BallotCreateComponent;
  let fixture: ComponentFixture<BallotCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallotCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallotCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
