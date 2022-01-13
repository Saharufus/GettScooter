import React, { useState, useEffect, useContext } from "react";
import { SignUpButton } from "./SignUpButton";
import Modal from "../components/modal/Modal";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AccountBox } from "./accountBox";
import { AppContext } from "../context/context";
import { Button } from "./Button";

function Navbar() {
  const { isAuth, setIsAuth, openModal, setOpenModal } = useContext(AppContext);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const Logout = () => {
    setIsAuth(false);
    localStorage.clear();
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img className="social-logo" src="/images/white_logo.png" alt="" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/PickScooter"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Pick A Scooter
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>

          {!isAuth ? (
            <SignUpButton buttonStyle="btn--outline" setVisible={setOpenModal}>
              SIGN UP
            </SignUpButton>
          ) : (
            <Button onClick={Logout}>LOGOUT</Button>
          )}
        </div>
        {openModal && (
          <Modal visible={openModal} setVisible={setOpenModal}>
            <AccountBox setOpenModal={setOpenModal} />
          </Modal>
        )}
      </nav>
    </>
  );
}

export default Navbar;
