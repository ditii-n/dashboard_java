package com.example.dashboard.service;

import java.util.List;

import com.example.dashboard.model.Student;

public interface StudentService {
    public Student saveStudent(Student student);

    public List<Student> getAllStudents();
}
