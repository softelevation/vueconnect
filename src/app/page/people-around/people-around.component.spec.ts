import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleAroundComponent } from './people-around.component';

describe('PeopleAroundComponent', () => {
  let component: PeopleAroundComponent;
  let fixture: ComponentFixture<PeopleAroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleAroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleAroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
