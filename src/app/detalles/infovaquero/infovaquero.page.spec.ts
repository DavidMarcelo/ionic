import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfovaqueroPage } from './infovaquero.page';

describe('InfovaqueroPage', () => {
  let component: InfovaqueroPage;
  let fixture: ComponentFixture<InfovaqueroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfovaqueroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfovaqueroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
