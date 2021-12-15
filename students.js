const StudentsDB = require("../Databases/students");

function AddStudent(student) {
    return StudentsDB.addStudent(student);
}

function getStudents () {
    return StudentsDB.getStudents();
}

function deleteStudent(studentInfo) {
    return StudentsDB.deleteStudents(studentInfo)
}
function updateStudent(studentInfo) {
    return StudentsDB.updateStudent(studentInfo)
}

module.exports.AddStudents = AddStudent
module.exports.getStudents = getStudents;
module.exports.deleteStudent = deleteStudent
module.exports.updateStudent = updateStudent
