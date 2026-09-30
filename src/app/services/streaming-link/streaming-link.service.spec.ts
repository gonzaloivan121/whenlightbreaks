import { TestBed } from '@angular/core/testing';

import { StreamingLinkService } from './streaming-link.service';

describe('StreamingLinkService', () => {
    let service: StreamingLinkService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(StreamingLinkService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
