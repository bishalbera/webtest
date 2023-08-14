import React, { useState } from "react";
import "../meetBookingScreen/meetBookingScreen.css";
import { Link } from "react-router-dom";
import { IconUser, IconBriefcase, IconMessage } from "@tabler/icons-react";

const MeetBookingScreen = () => {
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
    const [selectedDay, setSelectedDay] = useState('');


    const timeSlots = [
        '9:00 AM',
        '9:15 AM',
        '9:30 AM',
        '9:45 AM',
        '10:00 AM',
        '10:15 AM',
        '10:30 AM',
        '10:45 AM',
        '11:00 AM',
        '11:15 AM',
        '11:30 AM',
        '11:45 AM',
        '12:00 PM',
        '12:15 PM',
        '12:30 PM',
        '12:45 PM'
    ];

    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    const handleDaySelect = (day) => {
        setSelectedDay(day);
    };

    const handleTimeSlotSelect = (timeSlot) => {
        setSelectedTimeSlot(timeSlot);
    };

    const handleBookMeeting = () => {
        // Handle booking logic here
    };

    return (
        <div className="meet-booking-screen">
            {/* Navbar */}
            <nav className="navbar">
                {/* <Link to="/profile" className="nav-item">
                    <IconUser size={24} />
                    Profile
                </Link> */}
                <Link to="/chat" className="nav-item">
                    <IconMessage size={24} />
                    Chat
                </Link>
                {/* <Link to="/job" className="nav-item">
                    <IconBriefcase size={24} />
                    Jobs
                </Link> */}
            </nav>
            <header>
                <h1>Time Slot Selection!!</h1>
                {/* Add your appbar content here */}
            </header>
            <nav>
                {/* Add your drawer content here */}
            </nav>
            <main>
                <div className="content">
                    <div className="section">
                        <h2>Select a day:</h2>
                        <div className="chip-list">
                            {days.map((day, index) => (
                                <div
                                    key={index}
                                    className={`chip ${selectedDay === day ? 'selected' : ''}`}
                                    onClick={() => handleDaySelect(day)}
                                >
                                    {day}
                                </div>
                            ))}
                        </div>
                        <p>selected day: {selectedDay}</p>
                    </div>
                    {/* Repeat similar pattern for time slot selection */}
                    <div className="section">
                        <h2>Select a time:</h2>
                        <div className="chip-list">
                            {timeSlots.map((timeSlot, index) => (
                                <div
                                    key={index}
                                    className={`chip ${selectedTimeSlot === timeSlot ? 'selected' : ''}`}
                                    onClick={() => handleTimeSlotSelect(timeSlot)}
                                >

                                    {timeSlot}
                                </div>
                            ))}
                        </div>
                        <p>selected timeSlot: {selectedTimeSlot}</p>
                    </div>
                    <button className="book-button" onClick={handleBookMeeting}>
                        Book Meeting
                    </button>
                </div>
            </main>
        </div>
    );

}

export default MeetBookingScreen;