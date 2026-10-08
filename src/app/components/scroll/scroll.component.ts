import { Component, OnDestroy, OnInit, signal } from '@angular/core';

import { NgIcon } from '@ng-icons/core';

import { ButtonComponent } from '@components/button/button.component';

@Component({
    selector: 'scroll-component',
    imports: [ButtonComponent, NgIcon],
    templateUrl: './scroll.component.html',
    styleUrl: './scroll.component.css',
})
export class ScrollComponent implements OnInit, OnDestroy {
    windowScrolled = signal(false);

    private readonly onWindowScroll = () => {
        this.windowScrolled.set(window.pageYOffset > 0);
    };

    ngOnInit() {
        window.addEventListener('scroll', this.onWindowScroll.bind(this));
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.onWindowScroll.bind(this));
    }

    scrollToTop(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
