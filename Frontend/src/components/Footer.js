import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <section class="social-media">
          <div class="social-media-wrap">
            <p class="about-text">About The App</p>
          </div>
        </section>
        <div className="info-container">
          <div className="card-container">
            <p className="card-title">Who can use?</p>
            All users that have a subscription to a e-scooter brand connected to
            our app.
          </div>
          <div className="card-container">
            <p className="card-title">Why use our app?</p>
            The app helps the user to plan a short distance trip and make it
            more pleasurable.
          </div>
          <div className="card-container">
            <p className="card-title">What does the app do?</p>
            Predicts the % chance of a scooter to be available at at a desired
            location and time.
          </div>
        </div>
      </section>
      <section class="social-media">
        <div class="social-media-wrap">
          <p class="about-text">The Team</p>
        </div>
      </section>
      <div class="all-pics-container">
        <div className="profile-container">
          <p className="profile-text">Alexander Tkach </p>
          <img className="profile-pic" src="images/Alex.jpeg" alt="" />
          <p className="profile-text">Full Stack Developer</p>
        </div>
        <div className="profile-container">
          <p className="profile-text">Marcela Jarovsky</p>
          <img className="profile-pic" src="images/Marcela.png" alt="" />
          <p className="profile-text">Full Stack Developer</p>
        </div>
        <div className="profile-container">
          <p className="profile-text">Sacha Attiach</p>
          <img className="profile-pic" src="images/Sacha.png" alt="" />
          <p className="profile-text">Full Stack Developer</p>
        </div>
        <div className="profile-container">
          <p className="profile-text">Aviram Mamo</p>
          <img className="profile-pic" src="images/Aviram.jpeg" alt="" />
          <p className="profile-text">Full Stack Developer</p>
        </div>
        <div className="profile-container">
          <p className="profile-text">Itai Mordekovich</p>
          <img className="profile-pic" src="images/Itai.png" alt="" />
          <p className="profile-text">Full Stack Developer</p>
        </div>
        <div className="profile-container">
          <p className="profile-text">Noam Cohen</p>
          <img className="profile-pic" src="images/Noam.png" alt="" />
          <p className="profile-text">Data Science</p>
        </div>
        <div className="profile-container">
          <p className="profile-text">Sahar Gerber</p>
          <img className="profile-pic" src="images/Sahar.png" alt="" />
          <p className="profile-text">Data Science</p>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <small class="website-rights">GettScooter © 2022</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
