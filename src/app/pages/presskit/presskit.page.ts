import { Component } from '@angular/core';

import { NgIcon } from '@ng-icons/core';

import { HeroComponent } from '@components/hero/hero.component';
import { HeroContentComponent } from '@components/hero/hero-content/hero-content.component';
import { ButtonComponent } from '@components/button/button.component';

@Component({
    selector: 'presskit-page',
    imports: [HeroComponent, HeroContentComponent, ButtonComponent, NgIcon],
    templateUrl: './presskit.page.html',
    styleUrl: './presskit.page.css',
})
export class PressKitPage {
    DownloadPressKit(): void {
        window.open('assets/documents/When Light Breaks - Press Kit - v2.pdf', '_blank');
    }
}
