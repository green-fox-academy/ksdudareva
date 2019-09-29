'use strict';


class Student{
    private _name: string;
    private _age: number;
    private _gender: string;
    private _previousOrganization: string;
    private _skippedDays: number;

constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'School of Life') {
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._previousOrganization = previousOrganization;
    this._skippedDays = 0;
    }

    getGoal(): void {
        console.log("Be a junior software developer.");
    }

    introduce(): void {
        console.log("Hi, I'm " + this._name + ", a " + this._age + "year old " + this._gender + " from " + this._previousOrganization + " who skipped " + this._skippedDays + " days from the course already.")
    }

    skipDays(numberOfDays): void {
        this._skippedDays += numberOfDays;
    }
}

export { Student };