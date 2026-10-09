import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressKitPage } from './presskit.page';

describe('PressKitPage', () => {
    let component: PressKitPage;
    let fixture: ComponentFixture<PressKitPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PressKitPage],
        }).compileComponents();

        fixture = TestBed.createComponent(PressKitPage);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
