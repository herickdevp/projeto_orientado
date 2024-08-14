import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoCriticoComponent } from './aviso-critico.component';

describe('AvisoCriticoComponent', () => {
  let component: AvisoCriticoComponent;
  let fixture: ComponentFixture<AvisoCriticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvisoCriticoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisoCriticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTrue();
  });
});
