import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHoweverComponent } from './add-however.component';

describe('AddHoweverComponent', () => {
  let component: AddHoweverComponent;
  let fixture: ComponentFixture<AddHoweverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHoweverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHoweverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
