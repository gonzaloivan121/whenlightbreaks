import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicSection } from './music.section';

describe('MusicSection', () => {
    let component: MusicSection;
    let fixture: ComponentFixture<MusicSection>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MusicSection],
        }).compileComponents();

        fixture = TestBed.createComponent(MusicSection);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
