import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsPage } from './buttons.page';

describe('ButtonsPage', () => {
    let component: ButtonsPage;
    let fixture: ComponentFixture<ButtonsPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ButtonsPage],
        }).compileComponents();

        fixture = TestBed.createComponent(ButtonsPage);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});