import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRdmComponent } from './change-rdm.component';

describe('ChangeRdmComponent', () => {
  let component: ChangeRdmComponent;
  let fixture: ComponentFixture<ChangeRdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeRdmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeRdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
