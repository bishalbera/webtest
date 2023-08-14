import React, { useState } from "react";
import "../courses/addCourseScreen.css";
import { useNavigate } from "react-router-dom";

// const AddCourseScreen = ({ courses, history }) => {
const AddCourseScreen = () => {

    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        courseDetails: "",
        insctructorName: "",
        duration: "",
        email: "",
        price: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value)
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const newCourse = {
                title: formData.title,
                description: formData.details,
            };
            // courses.push(newCourse);
            setCourses(newCourse);  // Write saving courses logic here
            // history.goBack();
            navigate(-1);
        }
    };

    const validateForm = () => {
        // Implement your validation logic here
        // Return true if valid, false otherwise

        if (formData.title.length > 1 && formData.courseDetails.length > 1 && formData.insctructorName.length > 1 && formData.duration.length > 1 && formData.email.length > 1 && formData.price.length > 1) {
            return true;
        }

        alert("User should enter more than 2 characters in every input!!");

        return false;

    };

    return (
        <div className="add-course-screen">
            <header>
                <h1>Add Course</h1>
            </header>
            <main>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                        />
                        <label>Course Details</label>
                        <input
                            type="text"
                            name="courseDetails"
                            value={formData.courseDetails}
                            onChange={handleInputChange}
                            required
                        />
                        <label>Instructor Name</label>
                        <input
                            type="text"
                            name="insctructorName"
                            value={formData.insctructorName}
                            onChange={handleInputChange}
                            required
                        />
                        <label>Duration</label>
                        <input
                            type="text"
                            name="duration"
                            value={formData.duration}
                            onChange={handleInputChange}
                            required
                        />
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <label>Price</label>
                        <input
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Add Course</button>
                    </div>
                </form>
            </main>
        </div>
    );
};

// I am installing dev tools for React as its needed to debugger......Okay?!

export default AddCourseScreen;