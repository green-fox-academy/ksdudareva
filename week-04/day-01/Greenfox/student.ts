import { Person } from "./Person";

export class Student extends Person {
    private _previousOrganization: string;
    private _skippedDays: number;

    constructor(name: string, age: number, gender: string, previousOrganization: string){
        super(name, age, gender); 
        this._previousOrganization = previousOrganization;
        this._skippedDays = 0;
    }

    protected specificIntroduction(): string{
        return " from " + this._previousOrganization + " who skipped " + this._skippedDays + " days from the course already.";
    }

    protected specificGoal(): string{
        return "Be a junior software developer.";
    }

    public skipDays(numberOfDays: number): void {
        this._skippedDays += numberOfDays;
    }

}