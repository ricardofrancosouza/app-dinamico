import { TestBed } from '@angular/core/testing';

import { FactoryComponentsService } from './factory-components.service';

describe('FactoryComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FactoryComponentsService = TestBed.get(FactoryComponentsService);
    expect(service).toBeTruthy();
  });
});
