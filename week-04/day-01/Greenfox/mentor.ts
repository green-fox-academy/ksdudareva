'use strict';

import { Person } from "./Person";

export class Mentor extends Person {
    private _level: string;

    constructor(name: string, age: number, gender: string, level: string){
        super(name, age, gender); 
        this._level = level;
    }

    protected specificIntroduction(): string{
        return this._level + " mentor.";
    }

    protected specificGoal(): string{
        return "Educate brilliant junior software developers.";
    }

}