'use strict'

import { Student } from './10-student';

// Teacher
// teach(student) -> calls the students learn method
// answer() -> prints the teacher is answering a question

class Teacher{
    teach(student: Student): void {
        student.learn();
    }

    answer(): void {
        console.log("I'm answering the question");
    }
    
}

export { Teacher };