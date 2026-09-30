import { Component, inject } from '@angular/core';

import { UserService } from '@services/user/user.service';

@Component({
    selector: 'login-page',
    imports: [],
    templateUrl: './login.page.html',
    styleUrl: './login.page.css',
})
export class LoginPage {
    private readonly userService: UserService = inject(UserService);

    Login(username: string, password: string) {
        this.userService.Login(username, password);
    }
}
