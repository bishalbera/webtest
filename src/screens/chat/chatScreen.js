import React from 'react';

const GradientButtonCard = () => {
  return (
    <div className="card">
      <div className="profile">
        <img src="https://cdn.discordapp.com/attachments/1126705720704897097/1139145947348213830/WhatsApp_Image_2023-07-07_at_09.31.56.jpg" alt="Profile Picture" />
        <h2>Bishal Bera</h2>
      </div>
      <div className="mail">
        <h6>bishal@test.com</h6>
      </div>
      <p>I want help with flutter to make an app.</p>
      <button className="gradient-button">Lets Collaborate :)</button>
    </div>
  );
};

export default GradientButtonCard;
