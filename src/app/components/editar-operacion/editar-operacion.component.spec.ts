import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOperacionComponent } from './editar-operacion.component';

describe('EditarOperacionComponent', () => {
  let component: EditarOperacionComponent;
  let fixture: ComponentFixture<EditarOperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarOperacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarOperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
