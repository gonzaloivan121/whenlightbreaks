import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { form, FormField, FormRoot } from '@angular/forms/signals';

import { HeroComponent } from '@components/hero/hero.component';
import { HeroContentComponent } from '@components/hero/hero-content/hero-content.component';
import { ButtonComponent } from '@components/button/button.component';

import { CardComponent } from '@components/card/card.component';
import { CardHeaderComponent } from '@components/card/card-header/card-header.component';
import { CardBodyComponent } from '@components/card/card-body/card-body.component';

import { AuthService } from '@services/auth/auth.service';

import { CreateUser } from '@models/user.model';

import { Email } from '@app/types/email.type';

@Component({
    selector: 'register-page',
    imports: [
        HeroComponent,
        HeroContentComponent,
        ButtonComponent,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        FormField,
        FormRoot,
    ],
    templateUrl: './register.page.html',
    styleUrl: './register.page.css',
})
export class RegisterPage {
    private readonly router = inject(Router);
    private readonly authService: AuthService = inject(AuthService);

    registerModel = signal<CreateUser>({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: '' as Email,
        phone: '',
    });

    registerForm = form(this.registerModel);

    /**
     * Handles the submission of the register form.
     *
     * It retrieves the form data and attempts to register the `User`.
     *
     * @memberof RegisterPage
     */
    OnSubmit(): void {
        const formData = this.registerModel();
        this.Register(formData);
    }

    /**
     * Navigates to the login page.
     *
     * @memberof RegisterPage
     */
    NavigateToLogin(): void {
        this.router.navigate(['/login']);
    }

    /**
     * Attempts to register a `User` with the provided `CreateUser` data.
     *
     * @param {CreateUser} createUser - The `CreateUser` data to register the `User`.
     * @memberof RegisterPage
     */
    Register(createUser: CreateUser): void {
        this.authService.Register(createUser).subscribe({
            next: (user) => {
                console.log(user);
            },
            error: (err) => {
                console.error(err);
            },
        });
    }
}
