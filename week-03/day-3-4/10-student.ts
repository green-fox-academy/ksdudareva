'use strict'

import { Teacher } from './10-teacher';

// Student
// learn() -> prints the student is learning something new
// question(teacher) -> calls the teachers answer method

class Student {
    learn(): void {
        console.log("Student is learning");
    }

    question(teacher: Teacher): void {
        teacher.answer();
    }
}

export { Student };