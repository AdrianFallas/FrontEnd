import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAvisosComponent } from './registrar-avisos.component';

describe('RegistrarAvisosComponent', () => {
  let component: RegistrarAvisosComponent;
  let fixture: ComponentFixture<RegistrarAvisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAvisosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
