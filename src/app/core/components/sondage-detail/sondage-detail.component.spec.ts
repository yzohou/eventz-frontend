import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDoodleDetailComponent } from './sondage-detail.component';

describe('MesDoodleDetailComponent', () => {
  let component: MesDoodleDetailComponent;
  let fixture: ComponentFixture<MesDoodleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesDoodleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesDoodleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
