import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map,tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class UserService implements OnInit{

    ngOnInit(){
       this.getUsers();
    }
    constructor(private http: HttpClient) { }

    getUsers(){
         return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(tap(data=>data));
    }
    getUserPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map(data=>data));
    }
    getUserPhotos(){
        return this.http.get('https://jsonplaceholder.typicode.com/photos').pipe(map(data=>data));
    }
}