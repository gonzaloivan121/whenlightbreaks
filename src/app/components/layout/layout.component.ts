import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from "@components/navbar/navbar.component";
import { FooterComponent } from '@components/footer/footer.component';
import { ScrollComponent } from '@components/scroll/scroll.component';

@Component({
    selector: 'layout-component',
    imports: [NavbarComponent, RouterOutlet, FooterComponent, ScrollComponent],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.css',
})
export class LayoutComponent {}
