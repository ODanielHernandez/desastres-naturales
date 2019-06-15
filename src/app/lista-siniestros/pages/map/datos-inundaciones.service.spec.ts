import { TestBed } from '@angular/core/testing';

import { DatosInundacionesService } from './datos-inundaciones.service';

describe('DatosInundacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosInundacionesService = TestBed.get(DatosInundacionesService);
    expect(service).toBeTruthy();
  });
});
