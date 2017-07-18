import { Component, OnInit } from '@angular/core';

import { UsuarioModel } from 'app/models/index';
import { UserService } from 'app/_services/index';
<<<<<<< HEAD
import { SelectItem, LazyLoadEvent} from 'primeng/primeng';
=======
import { SelectItem } from 'primeng/primeng';
>>>>>>> origin/master



@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: UsuarioModel;
    users: UsuarioModel[] = [];
    idUsers: SelectItem[];
    selectedCity: any;
<<<<<<< HEAD
    datasource: UsuarioModel[];
    totalRecords: number;
    cols: any[];
    columnOptions: SelectItem[];
=======

>>>>>>> origin/master
    constructor(private userService: UserService) {
        
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        
    }

    ngOnInit() {
        this.loadAllUsers();
        this.idUsers = [
<<<<<<< HEAD
            { label: '--Seleccione--', value: 0 },
=======
>>>>>>> origin/master
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
<<<<<<< HEAD
        this.cols = [
            { field: 'userId', header: 'userId' },
            { field: 'id', header: 'id' },
            { field: 'title', header: 'title' },
            { field: 'body', header: 'body' }
        ];

        this.columnOptions = [];
        for (let i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({ label: this.cols[i].header, value: this.cols[i] });
        }
=======
>>>>>>> origin/master

    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
<<<<<<< HEAD
        debugger;
        this.userService.getAll().subscribe(users => {
        //this.users = users;
        this.datasource = users;
        this.totalRecords = this.datasource.length;
        this.users = this.datasource.slice(0, 10);
        });
        
        //datasource imitation
        //this.userService.getAll().then(users => {
        //    this.datasource = users;
        //    this.totalRecords = this.datasource.length;
        //    this.users = this.datasource.slice(0, 10);
        //});
=======
        
        this.userService.getAll().subscribe(users => { this.users = users; });
>>>>>>> origin/master
    }

    loadUsersLazy(event: LazyLoadEvent) {
       
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        debugger;
        if (this.datasource) {
            this.users = this.datasource.filter(row => this.filterField(row, event.filters))
            // sort data
            debugger;
            this.users.sort((a, b) => this.compareField(a, b, event.sortField) * event.sortOrder);
            this.totalRecords = this.users.length;
            this.users = this.users.slice(event.first, (event.first + event.rows))
            
        }
        //if(Object.keys(event.filters).length > 0) {
        //    this.users = this.datasource.slice(event.first, (event.first + event.rows));
        //}
        //this.entities = Sorters.datatableSort(this.users, event.sortField, event.sortOrder);
        //this.entities = !e.filters ?
        //    this.entities :
        //    SmartFilter.filter(this.entities, e.filters, global);
        //this.totrows = this.entities.length;
        //if (e.rows) { this.entities = this.entities.slice(e.first, (e.first + e.rows)); }

        //imitate db connection over a network
        //setTimeout(() => {
        //    debugger;
        //    if (this.datasource) {
        //        this.users = this.datasource.slice(event.first, (event.first + event.rows));
        //    }
        //}, 250);
    }
    filterField(row, filter) {
        let isInFilter = false;
        let noFilter = true;
       
        for (var columnName in filter) {
            if (row[columnName] == null) {
                return;
            }
            noFilter = false;
            let rowValue: String = row[columnName].toString().toLowerCase();
            let filterMatchMode: String = filter[columnName].matchMode;
            if (filterMatchMode.includes("contains") && rowValue.includes(filter[columnName].value.toLowerCase())) {
                isInFilter = true;
            } else if (filterMatchMode.includes("startsWith") && rowValue.startsWith(filter[columnName].value.toLowerCase())) {
                isInFilter = true;
            } else if (filterMatchMode.includes("in") && filter[columnName].value.toString().includes(rowValue)) {
                isInFilter = true;
                
            } else if (filterMatchMode.includes("equals") && rowValue.includes(filter[columnName].value)) {
                isInFilter = true;
            }
        }

        if (noFilter) { isInFilter = true; }

        return isInFilter;
    }

    compareField(rowA, rowB, field: string): number {
        
        if (rowA[field] == null) return 1; // on considère les éléments null les plus petits
        if (typeof rowA[field] === 'string') {
            return rowA[field].localeCompare(rowB[field]);
        }
        if (typeof rowA[field] === 'number') {
            if (rowA[field] > rowB[field]) return 1;
            else return -1;
        }
    }

}