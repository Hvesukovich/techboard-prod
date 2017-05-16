import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGoodsComponent } from './user-goods.component';

describe('UserGoodsComponent', () => {
  let component: UserGoodsComponent;
  let fixture: ComponentFixture<UserGoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
