import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionGridComponent } from './fusion-grid.component';

describe('FusionGridComponent', () => {
  let component: FusionGridComponent;
  let fixture: ComponentFixture<FusionGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FusionGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FusionGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
