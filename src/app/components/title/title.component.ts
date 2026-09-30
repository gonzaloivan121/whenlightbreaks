import { Component, computed, input } from '@angular/core';

export type TitleColor =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link';

export type TitleSize =
    | 'small'
    | 'medium'
    | 'large';

@Component({
    selector: 'title-component',
    imports: [],
    templateUrl: './title.component.html',
    styleUrl: './title.component.css',
})
export class TitleComponent {
    class = input<string>('');

    title = input<string>();
    centered = input<boolean>(true);
    color = input<TitleColor>('primary');
    size = input<TitleSize>('medium');

    titleClass = computed(() => {
        const customClass = this.class().trim();
        const classes: string[] = ['title', this.color(), this.size()];

        if (this.centered()) {
            classes.push('centered');
        }

        if (customClass) {
            classes.push(customClass);
        }

        return classes.join(' ');
    });
}
