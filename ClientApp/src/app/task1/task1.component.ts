import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-task1',
    templateUrl: './task1.component.html',
    styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
    public userNumber =  1;
    public result: string | undefined;
    constructor() {
    }

    ngOnInit(): void {
    }
    processNumber (): void {
        let isMultipleOf3: boolean = Number(this.userNumber) % 3 === 0;
        let isMultipleOf5: boolean = Number(this.userNumber) % 5 === 0;
        if (isMultipleOf5 && isMultipleOf3) {
            this.result = "foo bar";
        }else if (isMultipleOf3) {
            this.result = "bar";
        } else if (isMultipleOf5) {
            this.result = "foo";
        }else {
            this.result = 'Invalid number, please enter other number';
        }
    }
}
