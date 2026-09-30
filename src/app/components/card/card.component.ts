import { Component, computed, input } from '@angular/core';

@Component({
    selector: 'card-component',
    imports: [],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
})
export class CardComponent {
    rounded = input<boolean>(true);
    elevated = input<boolean>(false);
    class = input<string>('');

    cardClass = computed(() => {
        const classes: string[] = [];
        const customClass = this.class().trim();

        if (this.rounded()) {
            classes.push('rounded');
        }

        if (this.elevated()) {
            classes.push('elevated');
        }

        if (customClass) {
            classes.push(customClass);
        }

        return classes.join(' ');
    });
}
