import React, { useState, useEffect } from "react";
import "./index.css";
import logo from "../../assets/sgs-logo.png";
import { BsCalendarDayFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Banner = () => {
  const targetDate = new Date("February 2, 2024 10:00:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="banner__container">
      <div className="banner--wrapper">
        <div className="banner__heading">
          <p>Synergetics Global System invites you to their event</p>
          <img src={logo} alt="SGS Logo" />
          <h1>HUAWEI-SGS eKIT DIGITALIZATION LAUNCH</h1>
        </div>
        <div className="banner__countdown">
          <div className="banner__countdown--details">
            <div>
              <BsCalendarDayFill className="banner--icons" />
              <p>Friday 2nd February 2024</p>
            </div>
            <div>
              <CiLocationOn className="banner--icons" />
              <p>LAGOS MARRIOTT HOTEL IKEJA</p>
            </div>
          </div>

          <div className="banner__countdown--timer">
            <div>
              <p>{timeRemaining.days}</p>
              <p className="timer--text">Days</p>
            </div>
            <div>
              <p>{timeRemaining.hours}</p>
              <p className="timer--text">Hours</p>
            </div>
            <div>
              <p>{timeRemaining.minutes}</p>
              <p className="timer--text">Minutes</p>
            </div>
            <div>
              <p>{timeRemaining.seconds}</p>
              <p className="timer--text">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
