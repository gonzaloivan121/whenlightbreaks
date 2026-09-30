import { Routes } from '@angular/router';

import { HomePage } from '@pages/home/home.page';
import { AboutPage } from '@app/pages/about/about.page';
import { MusicPage } from '@pages/music/music.page';
import { TourPage } from '@pages/tour/tour.page';
import { StorePage } from '@pages/store/store.page';
import { ProductPage } from './pages/product/product.page';

import { ShowcasePage } from '@pages/showcase/showcase.page';
import { ButtonsPage } from '@pages/showcase/buttons/buttons.page';
import { CardsPage } from '@pages/showcase/cards/cards.page';
import { HeroPage } from '@pages/showcase/hero/hero.page';

import { NotfoundPage } from '@pages/notfound/notfound.page';

export const routes: Routes = [
    // Home page
    { path: '', component: HomePage, title: 'Home | When Light Breaks' },
    { path: 'music', component: MusicPage, title: 'Music | When Light Breaks' },
    { path: 'tour', component: TourPage, title: 'Tour | When Light Breaks' },
    { path: 'about', component: AboutPage, title: 'About | When Light Breaks' },
    { path: 'store', component: StorePage, title: 'Store | When Light Breaks' },
    { path: 'product/:id', component: ProductPage, title: 'Product | When Light Breaks' },

    // Showcase shell + child showcases
    {
        path: 'showcase',
        component: ShowcasePage,
        title: 'Showcase | When Light Breaks',
        children: [
            { path: '', redirectTo: 'buttons', pathMatch: 'full' },
            { path: 'buttons', component: ButtonsPage, title: 'Button Showcase | When Light Breaks' },
            { path: 'cards', component: CardsPage, title: 'Card Showcase | When Light Breaks' },
            { path: 'hero', component: HeroPage, title: 'Hero Showcase | When Light Breaks' },
        ],
    },

    // Not Found Page
    { path: '**', component: NotfoundPage, title: 'Not Found | When Light Breaks' },
];
