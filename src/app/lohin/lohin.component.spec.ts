import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LohinComponent } from './lohin.component';

describe('LohinComponent', () => {
  let component: LohinComponent;
  let fixture: ComponentFixture<LohinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LohinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LohinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
