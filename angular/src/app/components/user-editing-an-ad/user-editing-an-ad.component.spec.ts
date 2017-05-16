import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditingAnAdComponent } from './user-editing-an-ad.component';

describe('UserEditingAnAdComponent', () => {
  let component: UserEditingAnAdComponent;
  let fixture: ComponentFixture<UserEditingAnAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditingAnAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditingAnAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
