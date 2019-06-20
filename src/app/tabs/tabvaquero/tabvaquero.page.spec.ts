import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabvaqueroPage } from './tabvaquero.page';

describe('TabvaqueroPage', () => {
  let component: TabvaqueroPage;
  let fixture: ComponentFixture<TabvaqueroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabvaqueroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabvaqueroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
