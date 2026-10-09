import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { ParseProductID } from '@app/types/product.type';

import { ProductPage } from './product.page';

describe('ProductPage', () => {
    let component: ProductPage;
    const productId = '123e4567-e89b-42d3-a456-426614174000';

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProductPage],
            providers: [provideRouter([{ path: 'product/:id', component: ProductPage }])],
        }).compileComponents();

        const harness = await RouterTestingHarness.create();
        component = await harness.navigateByUrl(`/product/${productId}`, ProductPage);
    });

    it('should get productId from the route parameters', () => {
        expect(component.productId).toBe(ParseProductID(productId));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
