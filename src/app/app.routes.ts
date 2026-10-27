import { Routes } from '@angular/router';

import { HomePage } from '@pages/home/home.page';
import { AboutPage } from '@pages/about/about.page';
import { PressKitPage } from '@pages/presskit/presskit.page';

import { NotfoundPage } from '@pages/notfound/notfound.page';

export const routes: Routes = [
    // Home page
    { path: '', component: HomePage, title: 'Home - When Light Breaks' },
    { path: 'about', component: AboutPage, title: 'About - When Light Breaks' },
    { path: 'press-kit', component: PressKitPage, title: 'Press Kit - When Light Breaks' },

    // Not Found Page
    { path: '**', component: NotfoundPage, title: 'Not Found - When Light Breaks' },
];
