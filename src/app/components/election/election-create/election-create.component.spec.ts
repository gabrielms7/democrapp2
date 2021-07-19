import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionCreateComponent } from './election-create.component';

describe('ElectionCreateComponent', () => {
  let component: ElectionCreateComponent;
  let fixture: ComponentFixture<ElectionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
