import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeSection } from './youtube.section';

describe('YoutubeSection', () => {
    let component: YoutubeSection;
    let fixture: ComponentFixture<YoutubeSection>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [YoutubeSection],
        }).compileComponents();

        fixture = TestBed.createComponent(YoutubeSection);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
