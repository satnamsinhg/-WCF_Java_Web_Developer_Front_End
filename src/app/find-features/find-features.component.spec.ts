import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFeaturesComponent } from './find-features.component';

describe('FindFeaturesComponent', () => {
  let component: FindFeaturesComponent;
  let fixture: ComponentFixture<FindFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
