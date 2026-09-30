import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipComponent } from './skip.component';

describe('SkipComponent', () => {
    let component: SkipComponent;
    let fixture: ComponentFixture<SkipComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SkipComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SkipComponent);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
