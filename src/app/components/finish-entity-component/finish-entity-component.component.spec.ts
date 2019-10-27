import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishEntityComponentComponent } from './finish-entity-component.component';

describe('FinishEntityComponentComponent', () => {
  let component: FinishEntityComponentComponent;
  let fixture: ComponentFixture<FinishEntityComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishEntityComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishEntityComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
