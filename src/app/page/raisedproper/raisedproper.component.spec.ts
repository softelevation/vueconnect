import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisedproperComponent } from './raisedproper.component';

describe('RaisedproperComponent', () => {
  let component: RaisedproperComponent;
  let fixture: ComponentFixture<RaisedproperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaisedproperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaisedproperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
