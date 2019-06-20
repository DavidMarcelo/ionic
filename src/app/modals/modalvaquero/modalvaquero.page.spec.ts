import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalvaqueroPage } from './modalvaquero.page';

describe('ModalvaqueroPage', () => {
  let component: ModalvaqueroPage;
  let fixture: ComponentFixture<ModalvaqueroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalvaqueroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalvaqueroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
