import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalhaMassivaComponent } from './falha-massiva.component';

describe('FalhaMassivaComponent', () => {
  let component: FalhaMassivaComponent;
  let fixture: ComponentFixture<FalhaMassivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FalhaMassivaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalhaMassivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTrue();
  });
});
