import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticiperDetailComponent } from './participer-detail.component';

describe('ParticiperDetailComponent', () => {
  let component: ParticiperDetailComponent;
  let fixture: ComponentFixture<ParticiperDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticiperDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticiperDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
