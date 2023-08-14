import React  from "react";
import "./OnboardingScreen.css";
import animationData from "../../assets/welcome-animation.json";






 const OnboardingScreen = () => {
 

  return (
    <div className="wrapper">
    {/* <Lottie options={lottieOptions} height={300} width={300} /> */}
    
<lottie-player src="https://assets3.lottiefiles.com/packages/lf20_3vbOcw.json" background="transparent" speed="1" style={{ height: 390, width: 290 }} loop autoplay></lottie-player>

    <p className="text">SkillConnect: Empower, Collaborates, Thrive. Join SkillConect, meet mentors, get amazing skill knowledge from courses! Chat with amazing peoples, get some good job oportunities and collab in a team and do dream work!</p>
    <button className="get-started-button">Get Started</button>
  </div>
  );
};

export default OnboardingScreen;