import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeitemComponent } from './freeitem.component';

describe('FreeitemComponent', () => {
  let component: FreeitemComponent;
  let fixture: ComponentFixture<FreeitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeitemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
