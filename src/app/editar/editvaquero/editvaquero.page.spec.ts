import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvaqueroPage } from './editvaquero.page';

describe('EditvaqueroPage', () => {
  let component: EditvaqueroPage;
  let fixture: ComponentFixture<EditvaqueroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditvaqueroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditvaqueroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
