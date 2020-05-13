import { TestBed } from '@angular/core/testing';

import { GestureCtrlService } from './gesture-ctrl.service';

describe('GestureCtrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestureCtrlService = TestBed.get(GestureCtrlService);
    expect(service).toBeTruthy();
  });
});
