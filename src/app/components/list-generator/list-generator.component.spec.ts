import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGeneratorComponent } from './list-generator.component';

describe('ListGeneratorComponent', () => {
  let component: ListGeneratorComponent;
  let fixture: ComponentFixture<ListGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
