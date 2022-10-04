import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputWithSubmitButtonComponent } from './search-input-with-submit-button.component';

describe('SearchInputWithSubmitButtonComponent', () => {
  let component: SearchInputWithSubmitButtonComponent;
  let fixture: ComponentFixture<SearchInputWithSubmitButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchInputWithSubmitButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchInputWithSubmitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
