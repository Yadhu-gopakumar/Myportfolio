import React from "react";
import './Projects.css';
import { LuLink } from "react-icons/lu";

import { FaGithub } from "react-icons/fa";

import ecom from "../../assets/ecom.png"
import lucidia from "../../assets/lucidia.png"
import weather from "../../assets/weather.png"
import tictactoe from "../../assets/tictactoe.png"
import chatbot from "../../assets/chatbot.png"
import sportzone from "../../assets/sportzone.png"




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
        title: "Sport-zone",
        name: "Turf booking system",
        explanation: "Turf ground booking system with django,includes 3 modules customer,turfowner and admin",
        link2: "https://sportzone.pythonanywhere.com/",
        link1: "https://github.com/Yadhu-gopakumar/turf.git",
        url: sportzone
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

const WebCards = () => {

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

                                            <li><a href={el.link1}><FaGithub /></a></li>
                                            <li><a href={el.link2}><LuLink /></a></li>
                                         

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

export default WebCards;
