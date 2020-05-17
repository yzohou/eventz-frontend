import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDoodleComponent } from './mes-sondages.component';

describe('MesDoodleComponent', () => {
  let component: MesDoodleComponent;
  let fixture: ComponentFixture<MesDoodleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesDoodleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesDoodleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
