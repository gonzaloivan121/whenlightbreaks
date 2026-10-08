import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { CreateUser, LoginUser, User } from '@models/user.model';

/**
 * An interface that represents the response from the Auth server.
 *
 * @export
 * @interface AuthResponse
 */
export interface AuthResponse {
    /**
     * The JWT token retrieved from the server.
     *
     * @type {string}
     * @memberof AuthResponse
     */
    token: string;
}

/**
 * Service for managing the Authorization of the app.
 *
 * @export
 * @class AuthService
 */
@Service()
export class AuthService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = 'http://localhost:3000';

    private tokenSignal = signal<string | null>(localStorage.getItem('jwt_token'));
    
    public GetCurrentApiKey(): string | null {
        return this.tokenSignal();
    }

    public Login(credentials: LoginUser): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`${this.baseUrl}/auth/login`, credentials).pipe(tap(response  => {
            if (response.token) {
                this.SetToken(response.token);
            }
        }));
    }

    public Register(createUser: CreateUser): Observable<User> {
        return this.http.post<User>(`${this.baseUrl}/auth/register`, createUser);
    }

    private SetToken(token: string): void {
        this.tokenSignal.set(token);
        localStorage.setItem('jwt_token', token);
    }
}
