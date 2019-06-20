import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaquerosPage } from './vaqueros.page';

describe('VaquerosPage', () => {
  let component: VaquerosPage;
  let fixture: ComponentFixture<VaquerosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaquerosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaquerosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
