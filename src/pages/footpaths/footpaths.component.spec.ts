import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootpathsComponent } from './footpaths.component';

describe('FootpathsComponent', () => {
  let component: FootpathsComponent;
  let fixture: ComponentFixture<FootpathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootpathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootpathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
