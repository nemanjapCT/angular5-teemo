import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpTestComponent } from './np-test.component';

describe('NpTestComponent', () => {
  let component: NpTestComponent;
  let fixture: ComponentFixture<NpTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
