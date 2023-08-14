import React from "react";
import "../courses/courseCard.css";


const CourseCard = ({ course, enrollLink }) => {
    return (
        <div className="course-card">
            <div className="course-details">
                <h2>{course.title}</h2>
                <p>{course.description}</p>
            </div>
            <div className="enroll-button">
                <a href={enrollLink}>Enroll</a>  {/* Adjust link */}
            </div>
        </div>
    );
};

export default CourseCard;