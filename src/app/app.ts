import { Component } from '@angular/core';

import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

import { LayoutComponent } from "@components/layout/layout.component";

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    constructor() {
        inject();
        injectSpeedInsights();
    }
}
