import { TestBed } from '@angular/core/testing';

import { LogInterceptor } from './log-interceptor.service';

describe('LogInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogInterceptor = TestBed.get(LogInterceptor);
    expect(service).toBeTruthy();
  });
});
