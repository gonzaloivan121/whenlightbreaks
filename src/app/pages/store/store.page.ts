import { Component } from '@angular/core';

import { HeroComponent } from "@components/hero/hero.component";

import { StoreSection } from "@sections/store/store.section";

@Component({
    selector: 'store-page',
    imports: [HeroComponent, StoreSection],
    templateUrl: './store.page.html',
    styleUrl: './store.page.css',
})
export class StorePage {
    
}
