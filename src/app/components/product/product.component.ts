import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

import { NgIcon } from '@ng-icons/core';

import { ButtonComponent } from '@components/button/button.component';

import { Product } from '@models/product.model';

@Component({
    selector: 'product-component',
    imports: [ButtonComponent, NgIcon],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
})
export class ProductComponent {
    private readonly router = inject(Router);

    product = input.required<Product>();

    BuyProduct() {
        this.router.navigate(['/product', this.product().id]);
    }
}
