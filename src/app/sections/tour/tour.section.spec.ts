import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourSection } from './tour.section';

describe('TourSection', () => {
    let component: TourSection;
    let fixture: ComponentFixture<TourSection>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TourSection],
        }).compileComponents();

        fixture = TestBed.createComponent(TourSection);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
