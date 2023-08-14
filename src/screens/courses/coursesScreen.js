import React from "react";
import { Link } from "react-router-dom";
import "../courses/courseScreen.css";
import CourseCard from "./courseCard";
import AddCourseScreen from "./addCourseScreen";


const CourseScreen = ({ courses }) => {
    return (
        <div className="course-screen">
            <header>
                <h1>Courses</h1>
            </header>
            <main>
                <div className="curse-list">
                    {courses.map((course, index) => (
                        <CourseCard
                            key={index}
                            course={course}
                            enrollLink={'/enroll/${index}'}
                        />
                    ))}
                </div>
            </main>
            <footer>
                <Link to="/add-course" className="add-course-button">
                    <span>Add Course</span>
                </Link>
            </footer>
        </div>
    );
};

export default CourseScreen;