import React, { useContext } from "react";
import "../App.css";
import { Button } from "./Button";
import "./get-started.css";
import { AppContext } from "../context/context";

function GetStarted() {

  const {setOpenModal} = useContext(AppContext);

  return (
    <div className="hero-container">
      <video src="/videos/home_scooter.mp4" autoPlay loop muted />
      <h1>GettScooter</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={()=>{setOpenModal(true)}}
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default GetStarted;
