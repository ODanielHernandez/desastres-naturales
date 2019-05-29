import { TestBed } from '@angular/core/testing';

import { ListaSiniestrosService } from './lista-siniestros.service';

describe('ListaSiniestrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaSiniestrosService = TestBed.get(ListaSiniestrosService);
    expect(service).toBeTruthy();
  });
});
