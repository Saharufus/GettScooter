import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

function ScooterCard() {
  const { scooterID } = useParams();
  const [scooterData, setScooterData] = useState("");

  useEffect(() => {
    Axios.get(`http://localhost:3001/scooters/getScooter/${scooterID}`).then(
      (response) => {
        setScooterData(response.data.element);
      }
    );
  }, []);

  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  console.log(time, location);

  return (
    <div>
      <div className="selected">
        Selected Scooter: {scooterData.scootername}
      </div>
      <div className="login-box">
        <h2>Availability Calculator</h2>
        <form autoComplete="off">
          <div className="user-box">
            <input
              type="text"
              name="time"
              value={time}
              placeholder="Time"
              autoComplete="off"
              onChange={(event) => {
                setTime(event.target.value);
              }}
            />
          </div>
          <div className="user-box">
            <input
              type="text"
              name="location"
              value={location}
              placeholder="Location"
              autoComplete="off"
              onChange={(event) => {
                setLocation(event.target.value);
              }}
            />
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Will there be an available scooter?
          </a>
        </form>
      </div>
    </div>
  );
}

export default ScooterCard;
