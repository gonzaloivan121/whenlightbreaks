import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifySection } from './spotify.section';

describe('SpotifySection', () => {
    let component: SpotifySection;
    let fixture: ComponentFixture<SpotifySection>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SpotifySection],
        }).compileComponents();

        fixture = TestBed.createComponent(SpotifySection);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
