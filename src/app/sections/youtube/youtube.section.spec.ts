import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouTubeSection } from './youtube.section';

describe('YouTubeSection', () => {
    let component: YouTubeSection;
    let fixture: ComponentFixture<YouTubeSection>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [YouTubeSection],
        }).compileComponents();

        fixture = TestBed.createComponent(YouTubeSection);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
