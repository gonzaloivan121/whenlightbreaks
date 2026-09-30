import { TestBed } from '@angular/core/testing';

import { NavLinkService } from './nav-link.service';

describe('NavLinkService', () => {
    let service: NavLinkService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(NavLinkService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
