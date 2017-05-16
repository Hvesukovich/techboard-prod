import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingAnAdComponent } from './editing-an-ad.component';

describe('EditingAnAdComponent', () => {
  let component: EditingAnAdComponent;
  let fixture: ComponentFixture<EditingAnAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditingAnAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingAnAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
