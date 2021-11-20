import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdComponent } from './get-by-id.component';

describe('GetByIdComponent', () => {
  let component: GetByIdComponent;
  let fixture: ComponentFixture<GetByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
