import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../app.config';
import { UsuarioModel } from '../models/index';

@Injectable()
export class UserService {
    constructor(private http: Http, private config: AppConfig) { }

    getAll() {
        //return this.http.get(this.config.apiUrl + '/posts', this.jwt()).map((response: Response) => response.json());
        return this.http.get(this.config.apiUrl + 'posts', '')
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
               
                let user = response.json();
               
                return user;
            });
    }

    getById(id: number) {
        return this.http.get(this.config.apiUrl + '/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: UsuarioModel) {
        return this.http.post(this.config.apiUrl + '/users', user, this.jwt());
    }

    update(user: UsuarioModel) {
        return this.http.put(this.config.apiUrl + '/users/' + user.idUsuario, user, this.jwt());
    }

    delete(id: number) {
        return this.http.delete(this.config.apiUrl + 'posts/' + id, this.jwt());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}