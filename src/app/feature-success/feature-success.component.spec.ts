import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSuccessComponent } from './feature-success.component';

describe('FeatureSuccessComponent', () => {
  let component: FeatureSuccessComponent;
  let fixture: ComponentFixture<FeatureSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
