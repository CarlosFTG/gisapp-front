import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMessageComponentComponent } from './show-message-component.component';

describe('ShowMessageComponentComponent', () => {
  let component: ShowMessageComponentComponent;
  let fixture: ComponentFixture<ShowMessageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMessageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMessageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
