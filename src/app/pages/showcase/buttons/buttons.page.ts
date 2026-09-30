import { Component, OnDestroy, signal } from '@angular/core';

import { ButtonComponent, type ButtonSize, type ButtonVariant } from '@components/button/button.component';

type VariantGroup = {
    id: string;
    title: string;
    variants: readonly ButtonVariant[];
};

type SizeOption = {
    value: ButtonSize;
    label: string;
};

type StateOption = {
    id: string;
    label: string;
    rounded: boolean;
    disabled: boolean;
};

@Component({
    selector: 'buttons-showcase-page',
    imports: [ButtonComponent],
    templateUrl: './buttons.page.html',
    styleUrl: './buttons.page.css',
})
export class ButtonsPage implements OnDestroy {
    readonly copiedExampleId = signal<string | null>(null);

    private copyResetHandle?: ReturnType<typeof setTimeout>;

    readonly sizeOptions: readonly SizeOption[] = [
        { value: 'small', label: 'Small' },
        { value: 'medium', label: 'Medium' },
        { value: 'large', label: 'Large' },
    ];

    readonly variantGroups: readonly VariantGroup[] = [
        {
            id: 'solid',
            title: 'Solid Variants',
            variants: ['primary', 'secondary', 'tertiary', 'danger', 'success', 'warning', 'info', 'light', 'dark'],
        },
        {
            id: 'outline',
            title: 'Outline Variants',
            variants: ['outline-primary', 'outline-secondary', 'outline-tertiary', 'outline-danger', 'outline-success', 'outline-warning', 'outline-info', 'outline-light', 'outline-dark'],
        },
        {
            id: 'link',
            title: 'Link Variants',
            variants: ['link'],
        },
    ];

    readonly stateOptions: readonly StateOption[] = [
        { id: 'default', label: 'default', rounded: false, disabled: false },
        { id: 'disabled', label: 'disabled', rounded: false, disabled: true },
        { id: 'rounded', label: 'rounded', rounded: true, disabled: false },
        { id: 'rounded-disabled', label: 'rounded disabled', rounded: true, disabled: true },
    ];

    readonly totalButtons =
        this.sizeOptions.length *
        this.variantGroups.reduce((variantCount, group) => variantCount + group.variants.length, 0) *
        this.stateOptions.length;

    ngOnDestroy(): void {
        if (this.copyResetHandle !== undefined) {
            clearTimeout(this.copyResetHandle);
        }
    }

    async copyButtonCode(variant: ButtonVariant, size: ButtonSize, state: StateOption): Promise<void> {
        const code = this.buildButtonCode(variant, size, state);
        const copied = await this.copyToClipboard(code);

        if (!copied) {
            return;
        }

        this.copiedExampleId.set(this.getExampleId(variant, size, state.id));

        if (this.copyResetHandle !== undefined) {
            clearTimeout(this.copyResetHandle);
        }

        this.copyResetHandle = setTimeout(() => {
            this.copiedExampleId.set(null);
        }, 1500);
    }

    isCopied(variant: ButtonVariant, size: ButtonSize, stateId: StateOption['id']): boolean {
        return this.copiedExampleId() === this.getExampleId(variant, size, stateId);
    }

    private getExampleId(variant: ButtonVariant, size: ButtonSize, stateId: StateOption['id']): string {
        return `${variant}::${size}::${stateId}`;
    }

    private buildButtonCode(variant: ButtonVariant, size: ButtonSize, state: StateOption): string {
        const attributes: string[] = [`label="${state.label}"`, `variant="${variant}"`, `size="${size}"`];

        if (state.rounded) {
            attributes.push('[rounded]="true"');
        }

        if (state.disabled) {
            attributes.push('[disabled]="true"');
        }

        return `<button-component ${attributes.join(' ')}></button-component>`;
    }

    private async copyToClipboard(text: string): Promise<boolean> {
        try {
            if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(text);
                return true;
            }
        } catch {
            return this.fallbackCopy(text);
        }

        return this.fallbackCopy(text);
    }

    private fallbackCopy(text: string): boolean {
        if (typeof document === 'undefined') {
            return false;
        }

        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = text;
        tempTextArea.setAttribute('readonly', '');
        tempTextArea.style.position = 'fixed';
        tempTextArea.style.opacity = '0';

        document.body.appendChild(tempTextArea);
        tempTextArea.select();

        const copied = document.execCommand('copy');
        document.body.removeChild(tempTextArea);

        return copied;
    }
}