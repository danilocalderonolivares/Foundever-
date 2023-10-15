import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Person} from "../../Model/person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
    private apiUrl = `${environment.API_URL}`;
  constructor( private http: HttpClient) { }
    getAll() {
        return this.http.get<Person[]>(`${this.apiUrl}/Person`)
    }
}
