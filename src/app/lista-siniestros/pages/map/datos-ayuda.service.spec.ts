import { TestBed } from '@angular/core/testing';

import { DatosAyudaService } from './datos-ayuda.service';

describe('DatosAyudaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosAyudaService = TestBed.get(DatosAyudaService);
    expect(service).toBeTruthy();
  });
});
