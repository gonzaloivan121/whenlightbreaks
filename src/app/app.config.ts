import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, TitleStrategy, withInMemoryScrolling } from '@angular/router';

import { provideIcons } from '@ng-icons/core';

import { CustomTitleStrategy } from '@services/seo/seo.service';

import { routes } from './app.routes';
import { ionIcons, simpleIcons } from './app.icons';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(
            routes,
            withInMemoryScrolling({
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'top',
            }),
        ),
        provideIcons({
            ...ionIcons,
            ...simpleIcons,
        }),
        { provide: TitleStrategy, useClass: CustomTitleStrategy },
    ],
};
