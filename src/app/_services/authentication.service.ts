import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AppConfig } from '../app.config';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private config: AppConfig) { }

    login(username: string, password: string) {
        debugger;
        
        return this.http.get(this.config.apiUrl + 'posts/1','')
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                debugger;
                let user = response.json();
                debugger;
                localStorage.setItem('currentUser', JSON.stringify(user));
                //if (user && user.token) {
                //    // store user details and jwt token in local storage to keep user logged in between page refreshes
                //    localStorage.setItem('currentUser', JSON.stringify(user));
                //}
            });
       
    }
    //login(username: string, password: string) {
    //    return this.http.post('/users/authenticate', { username: username, password: password })
    //        .map((response: Response) => {
    //            // login successful if there's a jwt token in the response
    //            let user = response.json();
    //            if (user && user.token) {
    //                // store user details and jwt token in local storage to keep user logged in between page refreshes
    //                localStorage.setItem('currentUser', JSON.stringify(user));
    //            }

    //            return user;
    //        });
    //}
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}