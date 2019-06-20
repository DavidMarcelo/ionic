import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalvacunasPage } from './modalvacunas.page';

describe('ModalvacunasPage', () => {
  let component: ModalvacunasPage;
  let fixture: ComponentFixture<ModalvacunasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalvacunasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalvacunasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
