const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    // console.log(data);
    const lines = data.split('\n').filter((line) => line !== '');
    // console.log(lines);
    const columns = lines.shift().split(',');
    // console.log(columns);
    const students = lines.map((line) => line.split(','));
    // console.log(students);
    const fieldIndex = columns.indexOf('field');
    // console.log(fieldIndex);
    const CSstudents = students.filter((student) => student[fieldIndex] === 'CS').map((student) => student[0]);
    // console.log(CSstudents);
    const SWEstudents = students.filter((student) => student[fieldIndex] === 'SWE').map((student) => student[0]);
    console.log(`Number of students: ${students.length}`);
    console.log(`Number of students in CS: ${CSstudents.length}. List: ${CSstudents.join(', ')}`);
    console.log(`Number of students in SWE: ${SWEstudents.length}. List: ${SWEstudents.join(', ')}`);
  });
}

module.exports = countStudents;
