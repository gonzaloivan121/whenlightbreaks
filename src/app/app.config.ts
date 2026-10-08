import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideIcons } from '@ng-icons/core';

import { routes } from './app.routes';
import { ionIcons, simpleIcons } from './app.icons';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(routes),
        provideIcons({
            ...ionIcons,
            ...simpleIcons
        }),
    ],
};
