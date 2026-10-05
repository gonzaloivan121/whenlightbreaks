import { Routes } from '@angular/router';

import { HomePage } from '@pages/home/home.page';
import { AboutPage } from '@pages/about/about.page';
import { MusicPage } from '@pages/music/music.page';
// import { TourPage } from '@pages/tour/tour.page';
// import { StorePage } from '@pages/store/store.page';
// import { ProductPage } from '@pages/product/product.page';
// import { ContactPage } from '@pages/contact/contact.page';
import { PressKitPage } from '@pages/presskit/presskit.page';

import { NotfoundPage } from '@pages/notfound/notfound.page';

export const routes: Routes = [
    // Home page
    { path: '', component: HomePage, title: 'Home - When Light Breaks' },
    { path: 'music', component: MusicPage, title: 'Music - When Light Breaks' },
    // { path: 'tour', component: TourPage, title: 'Tour - When Light Breaks' },
    { path: 'about', component: AboutPage, title: 'About - When Light Breaks' },
    // { path: 'store', component: StorePage, title: 'Store - When Light Breaks' },
    // { path: 'product/:id', component: ProductPage, title: 'Product - When Light Breaks' },
    // { path: 'contact', component: ContactPage, title: 'Contact - When Light Breaks' },
    { path: 'presskit', component: PressKitPage, title: 'Press Kit - When Light Breaks' },

    // Not Found Page
    { path: '**', component: NotfoundPage, title: 'Not Found - When Light Breaks' },
];
