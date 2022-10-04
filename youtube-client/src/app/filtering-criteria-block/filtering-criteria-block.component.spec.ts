import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringCriteriaBlockComponent } from './filtering-criteria-block.component';

describe('FilteringCriteriaBlockComponent', () => {
  let component: FilteringCriteriaBlockComponent;
  let fixture: ComponentFixture<FilteringCriteriaBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteringCriteriaBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteringCriteriaBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
