import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresskitPage } from './presskit.page';

describe('PresskitPage', () => {
    let component: PresskitPage;
    let fixture: ComponentFixture<PresskitPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PresskitPage],
        }).compileComponents();

        fixture = TestBed.createComponent(PresskitPage);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
