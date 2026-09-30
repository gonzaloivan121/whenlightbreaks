import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ShowcasePage } from './showcase.page';

describe('ShowcasePage', () => {
    let component: ShowcasePage;
    let fixture: ComponentFixture<ShowcasePage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ShowcasePage],
            providers: [provideRouter([])],
        }).compileComponents();

        fixture = TestBed.createComponent(ShowcasePage);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
