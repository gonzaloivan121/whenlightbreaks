import { Component } from '@angular/core';

import { HeroComponent } from '@components/hero/hero.component';

import { ContactSection } from '@sections/contact/contact.section';

@Component({
    selector: 'contact-page',
    imports: [HeroComponent, ContactSection],
    templateUrl: './contact.page.html',
    styleUrl: './contact.page.css',
})
export class ContactPage {}
