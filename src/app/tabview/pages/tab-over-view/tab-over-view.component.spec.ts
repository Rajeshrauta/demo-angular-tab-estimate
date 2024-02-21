import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabOverViewComponent } from './tab-over-view.component';

describe('TabOverViewComponent', () => {
  let component: TabOverViewComponent;
  let fixture: ComponentFixture<TabOverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabOverViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabOverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
