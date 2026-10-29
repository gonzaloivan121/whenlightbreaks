import { Service, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import {
    ActivatedRoute,
    NavigationEnd,
    Router,
    RouterStateSnapshot,
    TitleStrategy,
} from '@angular/router';
import { filter } from 'rxjs/operators';

type MetaTag = {
    title: string;
    description: string;
    url: string;
}

@Service()
export class CustomTitleStrategy extends TitleStrategy {
    private readonly title = inject(Title);
    private readonly name: string = 'When Light Breaks';

    override updateTitle(routerState: RouterStateSnapshot): void {
        const pageTitle = this.buildTitle(routerState);
        if (pageTitle) {
            const fullTitle = `${pageTitle} - ${this.name}`;
            this.title.setTitle(fullTitle);
        }
    }
}

@Service()
export class SeoService {
    private readonly meta = inject(Meta);
    private readonly router = inject(Router);
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly document = inject(DOCUMENT);

    private readonly baseUrl = 'https://www.whenlightbreaks.com';
    private readonly defaultTitle = 'When Light Breaks';
    private readonly defaultDescription =
        'Formed in New York in 2026, When Light Breaks is an independent alternative metal band featuring Blegh Lady (vocals), DVRK PRISM (guitar), Dreadful Gooz (bass), and Morgan Simons (drums).';

    Initialize(): void {
        this.router.events
            .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => {
                let route = this.activatedRoute.root;
                while (route.firstChild) {
                    route = route.firstChild;
                }

                const routeTitle = route.snapshot.title || this.defaultTitle;
                const fullTitle =
                    routeTitle === this.defaultTitle
                        ? routeTitle
                        : `${routeTitle} - ${this.defaultTitle}`;

                const description = route.snapshot.data['description'] || this.defaultDescription;
                const cleanPath = event.urlAfterRedirects.split('?')[0];
                const canonicalUrl = `${this.baseUrl}${cleanPath === '/' ? '/' : cleanPath}`;

                const metaTag: MetaTag = {
                    title: fullTitle,
                    description,
                    url: canonicalUrl,
                };

                this.UpdateMetaTags(metaTag);
                this.UpdateCanonicalLink(canonicalUrl);
            });
    }

    private UpdateMetaTags(metaTag: MetaTag): void {
        const {title, description, url} = metaTag;

        // Primary Meta Tags
        this.meta.updateTag({ name: 'title', content: title });
        this.meta.updateTag({ name: 'description', content: description });

        // Open Graph
        this.meta.updateTag({ property: 'og:title', content: title });
        this.meta.updateTag({ property: 'og:description', content: description });
        this.meta.updateTag({ property: 'og:url', content: url });

        // X (Twitter)
        this.meta.updateTag({ name: 'twitter:title', content: title });
        this.meta.updateTag({ name: 'twitter:description', content: description });
        this.meta.updateTag({ name: 'twitter:url', content: url });
    }

    private UpdateCanonicalLink(url: string): void {
        let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
        
        if (!link) {
            link = this.document.createElement('link');
            link.setAttribute('rel', 'canonical');
            this.document.head.appendChild(link);
        }

        link.setAttribute('href', url);
    }
}
