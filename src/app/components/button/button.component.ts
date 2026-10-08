import { Component, computed, input, output } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark' | 'link' | 'outline-primary' | 'outline-secondary' | 'outline-tertiary' | 'outline-danger' | 'outline-success' | 'outline-warning' | 'outline-info' | 'outline-light' | 'outline-dark';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonIconPosition = 'start' | 'end';

@Component({
    selector: 'button-component',
    templateUrl: './button.component.html',
    styleUrl: './button.component.css',
})
export class ButtonComponent {
    label = input<string>('');
    variant = input<ButtonVariant>('primary');
    size = input<ButtonSize>('medium');
    rounded = input<boolean>(false);
    class = input<string>('');
    disabled = input<boolean>(false);
    icon = input<boolean>(false);
    iconPosition = input<ButtonIconPosition>('start');
    block = input<boolean>(false);

    onClick = output<void>();

    buttonClass = computed(() => {
        const customClass = this.class().trim();
        const classes: string[] = ['button', this.variant(), this.size()];

        if (this.rounded()) {
            classes.push('rounded');
        }

        if (this.block()) {
            classes.push('block');
        }

        if (customClass) {
            classes.push(customClass);
        }

        return classes.join(' ');
    });
}
