import { TestBed } from '@angular/core/testing';

import { DatosAlbergueService } from './datos-albergue.service';

describe('DatosAlbergueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosAlbergueService = TestBed.get(DatosAlbergueService);
    expect(service).toBeTruthy();
  });
});
