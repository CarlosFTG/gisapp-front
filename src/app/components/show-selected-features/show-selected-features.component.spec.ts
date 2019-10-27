import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSelectedFeaturesComponent } from './show-selected-features.component';

describe('ShowSelectedFeaturesComponent', () => {
  let component: ShowSelectedFeaturesComponent;
  let fixture: ComponentFixture<ShowSelectedFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSelectedFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSelectedFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
