import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { email, form, FormField, FormRoot, minLength, pattern, required } from '@angular/forms/signals';

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

    registerForm = form(this.registerModel, (schemaPath) => {
        required(schemaPath.firstName, { message: 'First name is required' });
        required(schemaPath.lastName, { message: 'Last name is required' });
        required(schemaPath.username, { message: 'Username is required' });
        required(schemaPath.password, { message: 'Password is required' });
        minLength(schemaPath.password, 8, {
            message: 'Password must be at least 8 characters long.',
        });
        required(schemaPath.email, { message: 'Email is required' });
        email(schemaPath.email, { message: 'Enter a valid email address' });
        required(schemaPath.phone, { message: 'Phone is required' });
        pattern(schemaPath.phone, /^\+[1-9]\d{1,14}$/, {
            message: 'Phone must be in format: +1112223333',
        });
    });

    get firstName() {
        return this.registerForm.firstName;
    }

    get lastName() {
        return this.registerForm.lastName;
    }

    get username() {
        return this.registerForm.username;
    }

    get password() {
        return this.registerForm.password;
    }

    get email() {
        return this.registerForm.email;
    }

    get phone() {
        return this.registerForm.phone;
    }

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
