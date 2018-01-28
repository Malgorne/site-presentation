import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkLoginComponent } from './network-login.component';

describe('NetworkLoginComponent', () => {
  let component: NetworkLoginComponent;
  let fixture: ComponentFixture<NetworkLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
