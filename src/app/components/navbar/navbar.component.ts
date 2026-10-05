import { Component, computed, inject, input, resource } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

import { NgIcon } from "@ng-icons/core";

import { NavLinkService } from '@services/nav-link/nav-link.service';
import { SocialLinkService } from '@services/social-link/social-link.service';

@Component({
    selector: 'navbar-component',
    imports: [RouterLink, RouterLinkActive, NgIcon],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
})
export class NavbarComponent {
    private readonly navLinkService: NavLinkService = inject(NavLinkService);
    private readonly socialLinkService: SocialLinkService = inject(SocialLinkService);

    navLinksResource = resource({
        loader: () => this.navLinkService.GetLinks(),
    });
    socialLinksResource = resource({
        loader: () => this.socialLinkService.GetLinks(),
    });

    hasNavLinks = computed(() => this.navLinksResource.hasValue());
    navLinks = computed(() => this.navLinksResource.value());
    hasSocialLinks = computed(() => this.socialLinksResource.hasValue());
    socialLinks = computed(() => this.socialLinksResource.value());
}
