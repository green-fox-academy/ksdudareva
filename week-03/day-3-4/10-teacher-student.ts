'use strict';

import { Student } from './10-student';
import { Teacher } from './10-teacher';

// Instantiate a Student and Teacher object
// Call the student's question() method and the teacher's teach() method

let mathTeacher = new Teacher();
let mathStudent = new Student();

mathStudent.question(mathTeacher);
mathTeacher.teach(mathStudent);

