import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarOficinaComponent } from './buscar-oficina.component';

describe('BuscarOficinaComponent', () => {
  let component: BuscarOficinaComponent;
  let fixture: ComponentFixture<BuscarOficinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarOficinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarOficinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
