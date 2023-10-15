import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
    public cantVowels= 0;
    userWord = new FormControl('');
  constructor() {
      this.countVocals();
  }

  ngOnInit(): void {
  }
  countVocals() {
      const vowelRegex = /[aeiouAEIOU]/g;
      this.userWord.valueChanges.subscribe((value)=>{
          value?.trim();
          const matches = value?.match(vowelRegex);
          this.cantVowels =  matches ? matches.length : 0;
      });
  }

}
