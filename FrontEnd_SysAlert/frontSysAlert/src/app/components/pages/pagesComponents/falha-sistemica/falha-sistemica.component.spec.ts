import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalhaSistemicaComponent } from './falha-sistemica.component';

describe('FalhaSistemicaComponent', () => {
  let component: FalhaSistemicaComponent;
  let fixture: ComponentFixture<FalhaSistemicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FalhaSistemicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalhaSistemicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTrue();
  });
});
