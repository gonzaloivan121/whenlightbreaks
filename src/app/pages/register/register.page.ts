import { Component, inject } from '@angular/core';
import { CreateUser } from '@app/models/user.model';

import { UserService } from '@services/user/user.service';

@Component({
    selector: 'register-page',
    imports: [],
    templateUrl: './register.page.html',
    styleUrl: './register.page.css',
})
export class RegisterPage {
    private readonly userService: UserService = inject(UserService);

    Register(createUser: CreateUser) {
        this.userService.Register(createUser);
    }
}
