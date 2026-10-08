import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { form, FormField } from '@angular/forms/signals';

import { HeroComponent } from '@components/hero/hero.component';
import { HeroContentComponent } from '@components/hero/hero-content/hero-content.component';
import { ButtonComponent } from '@components/button/button.component';

import { CardComponent } from '@components/card/card.component';
import { CardHeaderComponent } from '@components/card/card-header/card-header.component';
import { CardBodyComponent } from '@components/card/card-body/card-body.component';

import { AuthService } from '@services/auth/auth.service';

/**
 * Represents the model for `User` login credentials.
 *
 * @interface LoginModel
 */
interface LoginModel {
    /**
     * The username of the `User` attempting to log in.
     *
     * @type {string}
     * @memberof LoginModel
     */
    username: string;

    /**
     * The password of the `User` attempting to log in.
     *
     * @type {string}
     * @memberof LoginModel
     */
    password: string;

    /**
     * Indicates whether the `User` wants to be remembered on the device for future logins.
     *
     * @type {boolean}
     * @memberof LoginModel
     */
    remember: boolean;
}

@Component({
    selector: 'login-page',
    imports: [
        HeroComponent,
        HeroContentComponent,
        ButtonComponent,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        FormField,
    ],
    templateUrl: './login.page.html',
    styleUrl: './login.page.css',
})
export class LoginPage {
    private readonly router = inject(Router);
    private readonly authService: AuthService = inject(AuthService);

    loginModel = signal<LoginModel>({
        username: '',
        password: '',
        remember: false,
    });

    loginForm = form(this.loginModel);

    /**
     * Handles the submission of the login form.
     * 
     * It retrieves the form data and attempts to log in the user using the provided credentials.
     *
     * @memberof LoginPage
     */
    OnSubmit(): void {
        const formData = this.loginModel();
        this.Login(formData.username, formData.password);
    }

    /**
     * Navigates to the registration page.
     *
     * @memberof LoginPage
     */
    NavigateToRegister() {
        this.router.navigate(['/register']);
    }

    /**
     * Attempts to log in a `User` with the provided username and password.
     *
     * @param {string} username - The username of the user attempting to log in.
     * @param {string} password - The password of the user attempting to log in.
     * @memberof LoginPage
     */
    Login(username: string, password: string): void {
        this.authService.Login({ username, password }).subscribe({
            next: () => {
                console.log('User is live!');
            },
            error: (err) => {
                console.error(err);
            }
        });
    }
}
