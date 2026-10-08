import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { NgIcon } from '@ng-icons/core';

import { ContainerComponent } from '@components/container/container.component';

import { NavLinkService } from '@services/nav-link/nav-link.service';
import { SocialLinkService } from '@services/social-link/social-link.service';
import { StreamingLinkService } from '@services/streaming-link/streaming-link.service';

@Component({
    selector: 'footer-component',
    imports: [RouterLink, RouterLinkActive, NgIcon, ContainerComponent],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
})
export class FooterComponent {
    private readonly navLinkService: NavLinkService = inject(NavLinkService);
    private readonly socialLinkService: SocialLinkService = inject(SocialLinkService);
    private readonly streamingLinkService: StreamingLinkService = inject(StreamingLinkService);

    navLinksSignal = toSignal(this.navLinkService.GetLinks());
    socialLinksSignal = toSignal(this.socialLinkService.GetLinks());
    streamingLinksSignal = toSignal(this.streamingLinkService.GetLinks());
}
