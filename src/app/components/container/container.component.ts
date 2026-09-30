import { Component, computed, input } from '@angular/core';

export type ContainerSize = 'small' | 'medium' | 'large';

@Component({
    selector: 'container-component',
    imports: [],
    templateUrl: './container.component.html',
    styleUrl: './container.component.css',
})
export class ContainerComponent {
    fluid = input<boolean>(false);
    size = input<ContainerSize>('medium');
    class = input<string>('');

    readonly containerClass = computed(() => {
        const customClass = this.class().trim();
        const classes: string[] = ['container', this.size()];

        if (this.fluid()) {
            classes.push('fluid');
        }

        if (customClass) {
            classes.push(customClass);
        }

        return classes.join(' ');
    });
}
