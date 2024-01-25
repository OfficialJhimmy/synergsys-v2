import React from "react";
import "./index.css";
import { BsCalendarDayFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import Form from "../Form/Form";
import ekit from "../../assets/ekit-preview.png";
import flier from '../../assets/Artboard-one.png'

const EventDetails = () => {
  return (
    <div className="eventdetails__wrapper">
      <div className="eventdetails__top">
        <div className="eventdetails__top--cards">
          <BsCalendarDayFill />
          <p>Friday 2nd February 2024</p>
        </div>
        <div className="eventdetails__top--cards">
          <MdAccessTime />
          <p>10AM - 1PM</p>
        </div>
        <div className="eventdetails__top--cards">
          <CiLocationOn />
          <p>LAGOS MARRIOTT HOTEL IKEJA</p>
        </div>
      </div>

      <div className="eventdetails--about">
        <h3>ABOUT THIS EVENT</h3>
        <p>
          Following the appointment of SYNERGETICS GLOBAL SYSTEM as the pioneer
          Distribution Partner for the HUAWEI SME Product Category, the stage is
          set to on-board potential Partners to Deepen the Digitalization Drive
          for Accelerated National Development.
        </p>
        <p className="event--notice">
          NOTE:This is a LIVE / In-PERSON EVENT and It will hold according to
          the Schedule
        </p>

        {/* IMAGE WILL BE HERE */}
        <img src={flier} alt="Flier of the event" />
      </div>

      <div className="eventdetails--form">
        {/* <Form/> */}

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdTUjqQIwIQz1g-nRpKzOElN8ms05DfP83CD-8Qsm1wpEBo5w/viewform?embedded=true"
          width="640"
          height="2766"
          frameBorder="0"
          marginHeight="0"
          marginwWdth="0"
          style={
            {
              // overflow: "hidden"
            }
          }
          className="form--iframe"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default EventDetails;
