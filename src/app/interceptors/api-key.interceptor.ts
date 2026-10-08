import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { AuthService } from '@services/auth/auth.service';

/**
 * An interceptor that injects the API key from the `AuthService`.
 * 
 * @param {HttpRequest} req - The request to intercept.
 * @param {HttpHandlerFn} next - The function to move to the next request.
 * @returns 
 */
export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
    // Inject the AuthService to get the current user's API key.
    const authService = inject(AuthService);
    const apiKey = authService.GetCurrentApiKey();

    // If an API key exists, clone the request and attach the header.
    if (apiKey) {
        const modifiedReq = req.clone({
            setHeaders: {
                'X-API-Key': apiKey,
            },
        });

        // Send the modified request to the next handler.
        return next(modifiedReq);
    }

    // Send the original request if no key was found.
    return next(req);
};
