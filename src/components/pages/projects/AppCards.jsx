import React from "react";
import './Projects.css';

import { FaGithub } from "react-icons/fa";

import qr from "../../assets/qr.webp"
import calc from "../../assets/calc.webp"

let items = [
    {
        title: "Qcode App",
        name: "Qrcode App",
        explanation: "App made with flutter. we can read Qr codes or Barcodes. Also we can create Qr code from text",
        link: "https://github.com/Yadhu-gopakumar/qcode-app-flutter.git",
        url: qr,
    },
    {
        title: "Calculator",
        name: "Calculator Appt",
        explanation: "Calculator app built with flutter, we can do basic mathematical calculations with this app",
        link: "https://github.com/Yadhu-gopakumar/calculator-app-flutter.git",
        url: calc,
    },

];

const AppCards = () => {

    return (

        <div className="main-container">
            <ul className="grid-wrapper">
                {items.map((el) => {
                    return (
            
                        <div className="column">
                            <div className="card">
                                <div className="content">
                                    <div className="front">
                                        <img className="profile" width="100%" src={el.url} alt={el.key}></img>
                                        <h2>{el.title}</h2>
                                    </div>
                                    <div className="back from-bottom">
                                        <h2>{el.name}</h2>

                                        <p className="des">
                                            {el.explanation}
                                        </p>
                                        <ul className="social-icon">

                                            <li><a href={el.link}><FaGithub/></a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    );
                })}
            </ul>
        </div>

    );
}

export default AppCards;