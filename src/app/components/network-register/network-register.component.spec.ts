import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkRegisterComponent } from './network-register.component';

describe('NetworkRegisterComponent', () => {
  let component: NetworkRegisterComponent;
  let fixture: ComponentFixture<NetworkRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
