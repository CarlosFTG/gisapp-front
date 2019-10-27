import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFoundPointsComponentComponent } from './show-found-points-component.component';

describe('ShowFoundPointsComponentComponent', () => {
  let component: ShowFoundPointsComponentComponent;
  let fixture: ComponentFixture<ShowFoundPointsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFoundPointsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFoundPointsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
