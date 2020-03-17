import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import { CoreModule } from '../core.module';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [CoreModule],
        providers: [ NotificationService ]
    });
    service = TestBed.get(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
