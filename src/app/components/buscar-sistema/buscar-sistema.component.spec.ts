import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarSistemaComponent } from './buscar-sistema.component';

describe('BuscarSistemaComponent', () => {
  let component: BuscarSistemaComponent;
  let fixture: ComponentFixture<BuscarSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarSistemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
