import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourListComponent } from './your-list.component';

describe('YourListComponent', () => {
  let component: YourListComponent;
  let fixture: ComponentFixture<YourListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
