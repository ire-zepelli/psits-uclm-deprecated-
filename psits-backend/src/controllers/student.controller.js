import * as studentService from "../services/student.services.js";

export const getStudents = async (req, res) => {
  try {
    const students = await studentService.getStudents();
    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching students: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createStudent = async (req, res) => {
  try {
    const studentData = req.body;
    const newStudent = await studentService.createStudent(
      studentData,
      req.session.user.user
    );
    res.status(200).json(newStudent);
  } catch (error) {
    console.error("Error adding students: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const studentID = req.params.id;
    const studentData = req.body;

    const updatedStudent = await studentService.updateStudent(
      studentData,
      studentID
    );

    if (!updatedStudent)
      return res.status(404).json({ message: "Student not found." });

    res.status(200).json(updatedStudent);
  } catch (error) {
    console.error("Error updating students: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const studentID = req.params.id;
    const deleted = await studentService.deleteStudent(studentID);

    if (!deleted) {
      return res.status(404).json({ message: "Student not found. " });
    }

    res.status(200).json({ message: "Student deleted successfully." });
  } catch (error) {
    console.error("Error deleting students: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const searchStudent = async (req, res) => {
  try {
    const searchTerm = req.query.q;
    const students = await studentService.searchStudent(searchTerm);
    res.status(200).json(students);
  } catch (error) {
    console.error("Error searching students: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
