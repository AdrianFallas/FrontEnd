import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAvisosComponent } from './editar-avisos.component';

describe('EditarAvisosComponent', () => {
  let component: EditarAvisosComponent;
  let fixture: ComponentFixture<EditarAvisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAvisosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
