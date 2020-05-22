import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsPage } from './kids.component';

describe('KidsPage', () => {
  let component: KidsPage;
  let fixture: ComponentFixture<KidsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
