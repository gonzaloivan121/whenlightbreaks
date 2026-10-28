import { Component, inject, OnInit } from '@angular/core';

import { inject as injectAnalytics } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

import { LayoutComponent } from "@components/layout/layout.component";

import { SeoService } from '@services/seo/seo.service';

@Component({
    selector: 'app-root',
    imports: [LayoutComponent],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App implements OnInit {
    private readonly seoService: SeoService = inject(SeoService);

    ngOnInit(): void {
        injectAnalytics();
        injectSpeedInsights();

        this.seoService.Initialize();
    }
}
