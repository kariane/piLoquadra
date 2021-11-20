import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadraComponent } from './quadra.component';

describe('QuadraComponent', () => {
  let component: QuadraComponent;
  let fixture: ComponentFixture<QuadraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
