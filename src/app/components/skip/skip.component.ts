import { Component } from '@angular/core';

import { ButtonComponent } from '@components/button/button.component';

@Component({
    selector: 'skip-component',
    imports: [ButtonComponent],
    templateUrl: './skip.component.html',
    styleUrl: './skip.component.css',
})
export class SkipComponent {}
