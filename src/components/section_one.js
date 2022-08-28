import React from "react";
import { images } from "../App";


function SectionOne() {
  return (
      <section className="sec1">
        <nav>
          <div className="navleft">
            <div className="logo">
              <img src={images['logo.png']} alt="logo" />
            </div>

            <div className="navlink">
              <a href="#">Home</a>
              <a href="#">Services</a>
              <a href="#">About Us</a>
              <a href="#">Help Center</a>
            </div>
          </div>

          <div className="navright">
            <div className="nav-button">
              <button>Login</button>
              <img
                className="btnimg"
                src={images['login_button_bg.png']}
                alt="login"
              />
            </div>
          </div>
        </nav>
        <main className="main_img">
          <div className="maintxt">
            <h1>
              You sell it we<span> Deliver </span>it
            </h1>
            <p>
              Leave the logestics to us , while you focus on your customer and
              your product
            </p>
          </div>

          <div className="main_right">
            <img src={images['mask.png']} alt="mask" className="maask" />
            <img src={images['landing_bg.png']} alt="land" className="land" />
            <img src={images['clouds.png']} alt="cloud" className="cloud" />
          </div>

          <div className="wavdiv">
            <img src={images["waves.png"]} alt="cloud" className="waves" />
          </div>
        </main>
      </section>
  );
}

export default SectionOne;
