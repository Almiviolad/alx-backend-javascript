/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === 'San Francisco')
    .map((student) => {
      const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
      if (matchingGrade) {
        student.grade = matchingGrade.grade;
      } else {
        student.grade = 'N/A';
      }
      return student;
    });
}
