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
    private readonly assetsFolder: string = 'assets';
    private readonly documentsFolder: string = `${this.assetsFolder}/documents`;
    private readonly pressKitFilename: string = 'When Light Breaks - Electronic Press Kit.zip';

    private readonly analytics = inject(AnalyticsService);

    DownloadPressKit(): void {
        this.analytics.TrackEvent('download_press_kit', {
            category: 'epk',
            location: 'press_kit_page',
            file_type: 'zip',
        });

        window.open(`${this.documentsFolder}/${this.pressKitFilename}`, '_blank');
    }
}
