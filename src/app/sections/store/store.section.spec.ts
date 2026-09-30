import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSection } from './store.section';

describe('StoreSection', () => {
    let component: StoreSection;
    let fixture: ComponentFixture<StoreSection>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [StoreSection],
        }).compileComponents();

        fixture = TestBed.createComponent(StoreSection);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
