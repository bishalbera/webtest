import React, { useState } from 'react';
import OnboardingScreen from './screens/onBoarding/OnboardingScreen';
import MeetBookingScreen from './screens/meetBookingScreen/meetBookingScreen';
import AddCourseScreen from './screens/courses/addCourseScreen';
import CourseScreen from "./screens/courses/coursesScreen";
import ChatScreen from "./screens/chat/chatScreen";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<OnboardingScreen />} />
          <Route exact path="/addcoursescreen" element={<AddCourseScreen />} />
          <Route exact path='/chatscreen' element={<ChatScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
