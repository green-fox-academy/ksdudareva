'use strict';

export class Person {
    private _name: string;
    private _age: number;
    private _gender: string;

    constructor(name: string, age: number, gender: string) {
        this._name = name;
        this._age = age;
        this._gender = gender;
    }

    public introduce(): void {
        console.log("Hi, I'm  " + this._name + " a " + this._age + " year old " + this._gender + this.specificIntroduction());
    }

    public getGoal(): void {
        console.log("My goal is: " + this.specificGoal());
    }

    protected specificIntroduction(): string {
        return "";
    }

    protected specificGoal(): string {
        return "Live for the moment";
    }


}


 // public introduce(): void {
    //     console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + ".");
    // }

    // getGoal(): void {
    //     console.log("My goal is: Live for the moment!");
    // }