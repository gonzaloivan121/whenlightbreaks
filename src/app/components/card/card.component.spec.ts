import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { CardComponent } from './card.component';

import { CardBodyComponent } from './card-body/card-body.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { CardHeaderComponent } from './card-header/card-header.component';

@Component({
    imports: [CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent],
    template: `
        <card-component [elevated]="true" [rounded]="true">
            <card-header-component>
                <h3>Header Content</h3>
            </card-header-component>
            <card-body-component>
                <p>Body Content</p>
            </card-body-component>
            <card-footer-component>
                <p>Footer Content</p>
            </card-footer-component>
        </card-component>
    `,
})
class TestHostComponent {}

describe('CardComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        await fixture.whenStable();
    });

    it('should create', () => {
        const component = fixture.debugElement.children[0].componentInstance as CardComponent;

        expect(component).toBeTruthy();
    });

    it('should render projected header, body and footer content', () => {
        fixture.detectChanges();

        const element = fixture.nativeElement as HTMLElement;

        expect(element.querySelector('.card-header')?.textContent).toContain('Header Content');
        expect(element.querySelector('.card-body')?.textContent).toContain('Body Content');
        expect(element.querySelector('.card-footer')?.textContent).toContain('Footer Content');
    });
});
