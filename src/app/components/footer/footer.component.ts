import { Component, computed, inject, input, resource } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { NgIcon, provideIcons } from '@ng-icons/core';
import * as ionIcons from '@ng-icons/ionicons';
import * as simpleIcons from '@ng-icons/simple-icons';

import { ContainerComponent } from '@components/container/container.component';

import { NavLinkService } from '@services/nav-link/nav-link.service';
import { SocialLinkService } from '@services/social-link/social-link.service';
import { StreamingLinkService } from '@services/streaming-link/streaming-link.service';

@Component({
    selector: 'footer-component',
    imports: [RouterLink, RouterLinkActive, NgIcon, ContainerComponent],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    viewProviders: [provideIcons({ ...ionIcons, ...simpleIcons })],
})
export class FooterComponent {
    private readonly navLinkService: NavLinkService = inject(NavLinkService);
    private readonly socialLinkService: SocialLinkService = inject(SocialLinkService);
    private readonly streamingLinkService: StreamingLinkService = inject(StreamingLinkService);

    navLinksResource = resource({
        loader: () => this.navLinkService.GetLinks(),
    });
    socialLinksResource = resource({
        loader: () => this.socialLinkService.GetLinks(),
    });
    streamingLinksResource = resource({
        loader: () => this.streamingLinkService.GetLinks(),
    });

    hasNavLinks = computed(() => this.navLinksResource.hasValue());
    navLinks = computed(() => this.navLinksResource.value());
    hasSocialLinks = computed(() => this.socialLinksResource.hasValue());
    socialLinks = computed(() => this.socialLinksResource.value());
    hasStreamingLinks = computed(() => this.streamingLinksResource.hasValue());
    streamingLinks = computed(() => this.streamingLinksResource.value());
}
