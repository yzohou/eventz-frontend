import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoodleComponent } from './add-reunion.component';

describe('AddDoodleComponent', () => {
  let component: AddDoodleComponent;
  let fixture: ComponentFixture<AddDoodleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDoodleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoodleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
