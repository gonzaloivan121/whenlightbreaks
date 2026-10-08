import { Routes } from '@angular/router';

import { HomePage } from '@pages/home/home.page';
import { AboutPage } from '@pages/about/about.page';
import { MusicPage } from '@pages/music/music.page';
import { PressKitPage } from '@pages/presskit/presskit.page';

import { LoginPage } from '@pages/login/login.page';
import { RegisterPage } from '@pages/register/register.page';

import { NotfoundPage } from '@pages/notfound/notfound.page';

export const routes: Routes = [
    // Home page
    { path: '', component: HomePage, title: 'Home - When Light Breaks' },

    // Feature pages
    { path: 'music', component: MusicPage, title: 'Music - When Light Breaks' },
    { path: 'about', component: AboutPage, title: 'About - When Light Breaks' },
    { path: 'press-kit', component: PressKitPage, title: 'Press Kit - When Light Breaks' },

    // Auth pages
    { path: 'login', component: LoginPage, title: 'Login - When Light Breaks' },
    { path: 'register', component: RegisterPage, title: 'Register - When Light Breaks' },

    // Not Found page
    { path: '**', component: NotfoundPage, title: 'Not Found - When Light Breaks' },
];
