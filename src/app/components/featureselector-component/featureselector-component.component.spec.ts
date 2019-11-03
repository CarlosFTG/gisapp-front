import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureselectorComponentComponent } from './featureselector-component.component';

describe('FeatureselectorComponentComponent', () => {
  let component: FeatureselectorComponentComponent;
  let fixture: ComponentFixture<FeatureselectorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureselectorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureselectorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
