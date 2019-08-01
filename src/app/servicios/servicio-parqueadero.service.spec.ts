import { TestBed } from '@angular/core/testing';

import { ServicioParqueaderoService } from './servicio-parqueadero.service';

describe('ServicioParqueaderoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioParqueaderoService = TestBed.get(ServicioParqueaderoService);
    expect(service).toBeTruthy();
  });
});
