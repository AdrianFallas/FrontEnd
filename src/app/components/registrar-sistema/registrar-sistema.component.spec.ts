import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSistemaComponent } from './registrar-sistema.component';

describe('RegistrarSistemaComponent', () => {
  let component: RegistrarSistemaComponent;
  let fixture: ComponentFixture<RegistrarSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarSistemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
