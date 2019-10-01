'use strict';

import { Student } from './student';
import { Mentor } from './mentor';


export class Cohort{
    private _name: string;
    private _studentList: Student[];
    private _mentorList: Mentor[];

    public constructor (name: string) {
        this._name = name;
        this._studentList = [];
        this._mentorList = [];
    }

    public addStudent(student: Student): void {
        this._studentList.push(student);
    }

    public addMentor(mentor: Mentor): void {
        this._mentorList.push(mentor);
    }

    public info(): void {
        console.log("The " + this._name + " cohort has " + this._studentList.length + " students and " + this._mentorList.length + " mentors.");
    }
}