import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@app/models/product.model';

import { ButtonComponent } from '@components/button/button.component';

@Component({
    selector: 'product-component',
    imports: [ButtonComponent],
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
