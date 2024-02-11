import React from "react";
import './Projects.css';
import { LuLink } from "react-icons/lu";

import { FaGithub } from "react-icons/fa";

import ecom from "../../assets/ecom.png"
import lucidia from "../../assets/lucidia.png"
import weather from "../../assets/weather.png"
import tictactoe from "../../assets/tictactoe.png"
import chatbot from "../../assets/chatbot.png"
import qr from "../../assets/qr.webp"
import calc from "../../assets/calc.webp"



let items = [
    {
        title: "Lucidia",
        name: "Lucidia Social Media",
        explanation: "Social media Application with django and SQLite.",
        link1: "https://github.com/Yadhu-gopakumar/Lucidia.git",
        link2: "https://lucidia.pythonanywhere.com/",
        url: lucidia
    },
    {
        title: "Ecommerse App",
        name: "Ecommerse App",
        explanation: "Ecommerse Application with django and Mysql database",
        link1: "https://github.com/Yadhu-gopakumar/ecom-django.git",
        link2: "https://yadhuecom.pythonanywhere.com/shop/",
        url: ecom,
    },
    {
        title: "Weather App",
        name: "Weather App",
        explanation: "Weather App with Reactjs and openweathermap api",
        link1: "https://github.com/Yadhu-gopakumar/webprojects.github.io/tree/main/weatherjs",
        link2: "https://yadhu-weather-app.netlify.app/",
        url: weather
    },
    {
        title: "Qcode App",
        name: "Qrcode App",
        explanation: "App made with flutter. we can read Qr codes or Barcodes. Also we can create Qr code from text",
        link1: "https://github.com/Yadhu-gopakumar/qcode-app-flutter.git",
        url: qr,
    },
    {
        title: "Calculator",
        name: "Calculator",
        explanation: "Calculator app built with flutter, we can do basic mathematical calculations with this app",
        link1: "https://github.com/Yadhu-gopakumar/calculator-app-flutter.git",
        url: calc,
    },
    {
        title: "Tic-Tac-Toe",
        name: "Tic-Tac-Toe Game",
        explanation: "Simple board game known as TicTacToe made with vanila Javascript",
        link1: "https://github.com/Yadhu-gopakumar/webprojects.github.io/tree/main/tictactoe",
        link2: "https://yadhu-gopakumar.github.io/webprojects.github.io/tictactoe",
        url: tictactoe
    },
    {
        title: "Chatbot",
        name: "ChatBot with Php",
        explanation: "chatbot made with php ,Mysql and ajax.we can chat and interact with this",
        link1: "https://chatbot-by-yadhu.000webhostapp.com/homePage.php",
        link2: "https://chatbot-by-yadhu.000webhostapp.com/homePage.php",
        url: chatbot
    },
];

const AllCards = () => {

    return (

        <div className="main-container">
            <ul className="grid-wrapper">
                {items.map((el) => {
                    return (

                        <div className="column" key={el.title}>
                            <div className="card">
                                <div className="content">
                                    <div className="front">
                                        <img className="profile" width="100%" src={el.url} alt="img"></img>
                                        <h2>{el.title}</h2>
                                    </div>
                                    <div className="back from-bottom">
                                        <h2>{el.name}</h2>

                                        <p className="des">
                                            {el.explanation}
                                        </p>
                                        <ul className="social-icon">

                                            <li><a href={el.link1}><FaGithub /></a></li>
                                           {(el.link2)?<li><a href={el.link2}><LuLink /></a></li>:""} 
                                         

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

export default AllCards;