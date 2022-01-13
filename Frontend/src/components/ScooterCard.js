import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { getScooters } from "../actions/getScooters";

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
  console.log(scooterID);

  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState("");

  async function hoursAhead() {
    let startTime = Date.parse("Fri Dec 31 22:00:00 +000 2021");
    let expectedTime = Date.parse(time);
    let difference = expectedTime - startTime;
    let hours = Math.floor(difference / 3.6e6);
    console.log(hours);
    const res = await getScooters(hours);
    setResult(res);
  }

  return (
    <div>
      <div className="selected">
        {`Selected Scooter:
         ${scooterData.scootername}`}
      </div>
      <div className="login-box">
        <h2>Availability Calculator</h2>
        <form autoComplete="off">
          <div className="user-box">
            <input
              type="datetime-local"
              name="time"
              value={time}
              placeholder="Time"
              autoComplete="off"
              onChange={(event) => {
                setTime(event.target.value);
                setResult("");
              }}
            />
          </div>

          <div className="user-box">
            <label htmlFor="location">Location</label>
            <select
              style={{ marginTop: "2rem" }}
              name="location"
              defaultValue=""
              onChange={(event) => {
                setLocation(event.target.value);
              }}
            >
              <option></option>
              <option value="Chicago, West town">Chicago, West town</option>
            </select>
          </div>
          {result ? (
            <a href="#" onClick={hoursAhead}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              {result.data + "  scooters in this region"}
            </a>
          ) : (
            <a href="#" onClick={hoursAhead}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Will there be an available scooter?
            </a>
          )}
        </form>
      </div>
    </div>
  );
}

export default ScooterCard;
