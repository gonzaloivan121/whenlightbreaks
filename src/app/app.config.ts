import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { provideNgIconLoader } from '@ng-icons/core';

import { routes } from './app.routes';

import { apiKeyInterceptor } from '@interceptors/api-key.interceptor';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(routes),
        provideHttpClient(
            withInterceptors([apiKeyInterceptor])
        ),
        provideNgIconLoader(async (name: string) => {
            let module: any;

            if (name.startsWith('ion')) {
                module = await import('@ng-icons/ionicons');
            } else if (name.startsWith('simple')) {
                module = await import('@ng-icons/simple-icons');
            } else {
                console.warn(`[NgIconLoader]: Unknown icon prefix for "${name}".`);
                return '';
            }

            const icons = module as Record<string, unknown>;

            if (name in icons && typeof icons[name] === 'string') {
                return icons[name] as string;
            }

            console.warn(`[NgIconLoader]: Icon "${name}" was not found in its respective module.`);
            return '';
        }),
    ],
};
