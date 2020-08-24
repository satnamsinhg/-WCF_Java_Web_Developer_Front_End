import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindClientsComponent } from './find-clients.component';

describe('FindClientsComponent', () => {
  let component: FindClientsComponent;
  let fixture: ComponentFixture<FindClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
