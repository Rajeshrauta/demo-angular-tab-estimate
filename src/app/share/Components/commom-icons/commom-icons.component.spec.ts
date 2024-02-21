import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommomIconsComponent } from './commom-icons.component';

describe('CommomIconsComponent', () => {
  let component: CommomIconsComponent;
  let fixture: ComponentFixture<CommomIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommomIconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommomIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
