'use strict';

import { Person } from "./Person";

export class Sponsor extends Person{
    private _company: string;
    private _hiredStudents: number;

    constructor(name: string, age: number, gender: string, company: string) {
        super(name, age, gender);
        this._company = company;
        this._hiredStudents = 0;
    }

    protected specificIntroduction(): string{
        return " who represents " + this._company + " and hired " + this._hiredStudents + " students so far.";
    }

    protected specificGoal(): string{
        return "Hire brilliant junior software developers.";
    }

    hire(): void {
        this._hiredStudents++;
    }

}