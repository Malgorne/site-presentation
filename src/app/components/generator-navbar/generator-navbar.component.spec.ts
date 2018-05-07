import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorNavbarComponent } from './generator-navbar.component';

describe('GeneratorNavbarComponent', () => {
  let component: GeneratorNavbarComponent;
  let fixture: ComponentFixture<GeneratorNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
