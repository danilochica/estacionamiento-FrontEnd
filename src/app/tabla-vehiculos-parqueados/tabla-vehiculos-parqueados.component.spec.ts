import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaVehiculosParqueadosComponent } from './tabla-vehiculos-parqueados.component';

describe('TablaVehiculosParqueadosComponent', () => {
  let component: TablaVehiculosParqueadosComponent;
  let fixture: ComponentFixture<TablaVehiculosParqueadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaVehiculosParqueadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaVehiculosParqueadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
