import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsPage } from './chips.page';

describe('ChipsPage', () => {
  let component: ChipsPage;
  let fixture: ComponentFixture<ChipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
