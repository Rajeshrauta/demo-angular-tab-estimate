import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabViewFilterComponent } from './tab-view-filter.component';

describe('TabViewFilterComponent', () => {
  let component: TabViewFilterComponent;
  let fixture: ComponentFixture<TabViewFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabViewFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabViewFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
