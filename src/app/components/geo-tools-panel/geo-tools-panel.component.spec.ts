import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoToolsPanelComponent } from './geo-tools-panel.component';

describe('GeoToolsPanelComponent', () => {
  let component: GeoToolsPanelComponent;
  let fixture: ComponentFixture<GeoToolsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoToolsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoToolsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
