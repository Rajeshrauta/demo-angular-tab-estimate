import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabViewGridComponent } from './tab-view-grid.component';

describe('TabViewGridComponent', () => {
  let component: TabViewGridComponent;
  let fixture: ComponentFixture<TabViewGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabViewGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabViewGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
