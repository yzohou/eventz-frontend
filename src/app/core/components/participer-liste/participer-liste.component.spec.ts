import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticiperListeComponent } from './participer-liste.component';

describe('ParticiperListeComponent', () => {
  let component: ParticiperListeComponent;
  let fixture: ComponentFixture<ParticiperListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticiperListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticiperListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
