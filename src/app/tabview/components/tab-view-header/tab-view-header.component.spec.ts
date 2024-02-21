import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabViewHeaderComponent } from './tab-view-header.component';

describe('TabViewHeaderComponent', () => {
  let component: TabViewHeaderComponent;
  let fixture: ComponentFixture<TabViewHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabViewHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabViewHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
