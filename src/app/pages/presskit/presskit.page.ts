import { Component, inject } from '@angular/core';

import { NgIcon } from '@ng-icons/core';

import { HeroComponent } from '@components/hero/hero.component';
import { HeroContentComponent } from '@components/hero/hero-content/hero-content.component';
import { ButtonComponent } from '@components/button/button.component';

import { AnalyticsService } from '@services/analytics/analytics.service';

@Component({
    selector: 'presskit-page',
    imports: [HeroComponent, HeroContentComponent, ButtonComponent, NgIcon],
    templateUrl: './presskit.page.html',
    styleUrl: './presskit.page.css',
})
export class PressKitPage {
    private readonly analytics = inject(AnalyticsService);

    DownloadPressKit(): void {
        this.analytics.TrackEvent('download_press_kit', {
            category: 'epk',
            location: 'press_kit_page',
            file_type: 'zip',
        });

        window.open(
            `https://drive.google.com/drive/folders/18UfrKY8Ef2iJGGiJV2Q_yeIXnUftiW5G`,
            '_blank',
            'noopener noreferrer'
        );
    }
}
