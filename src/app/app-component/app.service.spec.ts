import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';
import { AppModule } from '../app.module';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [AppModule],
        providers: [AppService]
    });
    service = TestBed.get(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
