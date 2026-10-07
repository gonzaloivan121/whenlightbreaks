import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { form, FormField } from '@angular/forms/signals';

import { HeroComponent } from '@components/hero/hero.component';
import { HeroContentComponent } from '@components/hero/hero-content/hero-content.component';
import { ButtonComponent } from '@components/button/button.component';

import { UserService } from '@services/user/user.service';
import { CardComponent } from '@app/components/card/card.component';
import { CardHeaderComponent } from '@app/components/card/card-header/card-header.component';
import { CardBodyComponent } from '@app/components/card/card-body/card-body.component';

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
    private readonly userService: UserService = inject(UserService);

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
    async OnSubmit(): Promise<void> {
        const formData = this.loginModel();
        const result = await this.Login(formData.username, formData.password);

        if (result) {
            console.log('Login successful');
        } else {
            console.log('Login failed');
        }
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
     * Attempts to log in a user with the provided username and password.
     *
     * @param {string} username - The username of the user attempting to log in.
     * @param {string} password - The password of the user attempting to log in.
     * @returns {Promise<boolean>} A promise that resolves with a boolean indicating the success of the login attempt.
     * @memberof LoginPage
     */
    async Login(username: string, password: string): Promise<boolean> {
        let result: boolean = true;

        const user = await this.userService.Login(username, password).catch((error) => {
            result = false;
        });

        if (!user) {
            result = false;
        } else {
            console.log(user);
        }

        console.log(`Login result: ${result}`);

        return result;
    }
}
