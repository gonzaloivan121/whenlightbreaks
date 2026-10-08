import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { ContainerComponent } from '@components/container/container.component';
import { TitleComponent } from '@components/title/title.component';
import { ProductComponent } from '@components/product/product.component';

import { ProductService } from '@services/product/product.service';

@Component({
    selector: 'store-section',
    imports: [ContainerComponent, TitleComponent, ProductComponent],
    templateUrl: './store.section.html',
    styleUrl: './store.section.css',
})
export class StoreSection {
    title = signal<string>('Store');

    private readonly productService: ProductService = inject(ProductService);

    productsSignal = toSignal(this.productService.GetProducts());
}
