import { Routes } from '@angular/router';

import { HomePage } from '@pages/home/home.page';
import { AboutPage } from '@pages/about/about.page';
import { PressKitPage } from '@pages/presskit/presskit.page';

import { NotfoundPage } from '@pages/notfound/notfound.page';

export const routes: Routes = [
    // Home page
    {
        path: '',
        title: 'Home',
        data: {
            description:
                'Formed in New York in 2026, When Light Breaks is an independent alternative metal band featuring Blegh Lady (vocals), DVRK PRISM (guitar), Dreadful Gooz (bass), and Morgan Simons (drums)',
        },
        component: HomePage,
    },
    {
        path: 'about',
        title: 'About',
        data: {
            description:
                'Learn the story behind When Light Breaks, an independent alternative metal band from New York, and meet its members: Blegh Lady, DVRK PRISM, Dreadful Gooz, and Morgan Simons.',
        },
        component: AboutPage,
    },
    {
        path: 'press-kit',
        title: 'Press Kit',
        data: {
            description:
                'Official Electronic Press Kit (EPK) for When Light Breaks. Access high-res band photos, official biography, music releases, technical riders, and booking contact information.',
        },
        component: PressKitPage,
    },

    // Not Found Page
    {
        path: '**',
        title: 'Not Found',
        data: {
            description: 'The page you are looking for does not exist. Please check the URL.',
        },
        component: NotfoundPage,
    },
];
