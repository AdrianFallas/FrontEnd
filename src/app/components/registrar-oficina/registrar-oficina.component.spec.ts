import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarOficinaComponent } from './registrar-oficina.component';

describe('RegistrarOficinaComponent', () => {
  let component: RegistrarOficinaComponent;
  let fixture: ComponentFixture<RegistrarOficinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarOficinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarOficinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
