import React, { useContext, useState, useEffect } from "react";
import Axios from "axios";

import "./Cards.css";
import { Link } from "react-router-dom";

function Cards() {
  const [listOfScooters, setListOfScooters] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/scooters/getScooters", {
      // userID: currentUser._id,
    }).then((response) => {
      setListOfScooters(response.data);
    });
  }, []);

  return (
    <div className="menu">
      <div className="menuList">
        {listOfScooters.map((scooterItem) => {
          console.log(scooterItem);
          return (
            <div className="menuItem">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={`/ScooterCard/${scooterItem._id}`}
              >
                <div
                  style={{ backgroundImage: `url(${scooterItem.image})` }}
                ></div>
                <h2> {scooterItem.scootername} </h2>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;