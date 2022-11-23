import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarOperacionComponent } from './buscar-operacion.component';

describe('BuscarOperacionComponent', () => {
  let component: BuscarOperacionComponent;
  let fixture: ComponentFixture<BuscarOperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarOperacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarOperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
