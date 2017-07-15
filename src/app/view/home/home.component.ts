import { Component, OnInit } from '@angular/core';

import { UsuarioModel } from 'app/models/index';
import { UserService } from 'app/_services/index';
import { SelectItem } from 'primeng/primeng';



@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: UsuarioModel;
    users: UsuarioModel[] = [];
    idUsers: SelectItem[];
    selectedCity: any;

    constructor(private userService: UserService) {
        
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        
    }

    ngOnInit() {
        this.loadAllUsers();
        this.idUsers = [
            { label: '1', value: 1 },
            { label: '2', value: 2 },
            { label: '3', value: 3 },
            { label: '4', value: 4 },
            { label: '5', value: 5 },
            { label: '6', value: 6 },
            { label: '7', value: 7 },
            { label: '8', value: 8 },
            { label: '9', value: 9 },
            { label: '10', value: 10 }
        ];

    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}