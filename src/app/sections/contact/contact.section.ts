import { Component, signal } from '@angular/core';

import { ContainerComponent } from '@components/container/container.component';
import { TitleComponent } from '@components/title/title.component';

@Component({
    selector: 'contact-section',
    imports: [ContainerComponent, TitleComponent],
    templateUrl: './contact.section.html',
    styleUrl: './contact.section.css',
})
export class ContactSection {
    title = signal<string>('Contact');
}
