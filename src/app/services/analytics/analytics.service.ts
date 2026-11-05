import { Service, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { track as vercelTrack } from '@vercel/analytics';

declare global {
    interface Window {
        gtag?: (
            command: 'event',
            eventName: string,
            eventParams?: Record<string, string | number | boolean>,
        ) => void;
        clarity?: (command: 'event' | 'set', key: string, value?: string) => void;
    }
}

export type AnalyticsEventParams = Record<string, string | number | boolean>;

@Service()
export class AnalyticsService {
    private readonly platformId = inject(PLATFORM_ID);

    TrackEvent(eventName: string, params?: AnalyticsEventParams): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        // Google Analytics 4 (gtag.js)
        if (typeof window.gtag === 'function') {
            window.gtag('event', eventName, params);
        }

        // 2. Microsoft Clarity (Smart Events / Custom Tags)
        if (typeof window.clarity === 'function') {
            window.clarity('event', eventName);
            if (params) {
                Object.entries(params).forEach(([key, value]) => {
                    window.clarity?.('set', key, String(value));
                });
            }
        }

        // Vercel Web Analytics
        try {
            vercelTrack(eventName, params);
        } catch {
            // Quietly ignore if an AdBlocker blocks the script
        }
    }
}
