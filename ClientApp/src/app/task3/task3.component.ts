import { Component, OnInit } from '@angular/core';
import {PersonService} from "../services/person.service";
import {Person} from "../../Model/person";

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {
    public persons: Person[] | undefined;
  constructor(public personsService: PersonService) { }

  ngOnInit(): void {
      this.personsService.getAll().subscribe((response:Person[])=> {
          this.persons = response;
      });
  }

}
