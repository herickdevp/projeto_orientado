import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoCriticoComponentComponent } from './aviso-critico-component.component';

describe('AvisoCriticoComponentComponent', () => {
  let component: AvisoCriticoComponentComponent;
  let fixture: ComponentFixture<AvisoCriticoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvisoCriticoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisoCriticoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
