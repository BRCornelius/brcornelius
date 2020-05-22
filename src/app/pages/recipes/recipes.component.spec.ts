import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesPage } from './recipes.component';

describe('RecipesPage', () => {
  let component: RecipesPage;
  let fixture: ComponentFixture<RecipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
