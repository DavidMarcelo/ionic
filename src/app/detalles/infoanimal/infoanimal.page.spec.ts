import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoanimalPage } from './infoanimal.page';

describe('InfoanimalPage', () => {
  let component: InfoanimalPage;
  let fixture: ComponentFixture<InfoanimalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoanimalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoanimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
