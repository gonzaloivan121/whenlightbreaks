import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToProductID } from '@app/types/product.type';
import type { Product } from '@models/product.model';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
    let component: ProductComponent;
    let fixture: ComponentFixture<ProductComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProductComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ProductComponent);
        fixture.componentRef.setInput('product', {
            id: ToProductID(crypto.randomUUID()),
            name: 'Test Product',
            description: 'A product used in the component test.',
            price: 10,
            imageUrl: 'https://example.com/product.jpg',
            createdAt: new Date(),
        } satisfies Product);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
