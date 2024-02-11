import React from "react";
import './Projects.css';

import art1 from "../../assets/art1.jpg";
import art2 from "../../assets/art2.jpg";
import art3 from "../../assets/art3.jpg";
import art4 from "../../assets/art4.jpg";
import art5 from "../../assets/art5.jpg";

import { LuLink } from "react-icons/lu";



let items = [
    {
        title: "Digital Art",
        name: "Digital Drawing",
        explanation: "Digital painting on ibis paintX",
        link: "https://www.instagram.com/p/CmanFVOpcYS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        url: art1,
    },
    {
        title: "Digital Art",
        name: "Digital Drawing",
        explanation: "Digital painting on ibis paintX",
        link: "https://www.instagram.com/p/CoYycxdJhZz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        url: art2,
    }, {
        title: "Digital Art",
        name: "Digital Drawing",
        explanation: "Digital painting on ibis paintX",
        link: "https://www.instagram.com/p/CoYycxdJhZz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        url: art4,
    },
    {
        title: "Graphite Art",
        name: "Graphite Drawing",
        explanation: "Graphite Pencil hyperrealistic drawing",
        link: "https://www.instagram.com/p/CPFtGvXpmyt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        url: art3,
    },
    {
        title: "Graphite Art",
        name: "Graphite Drawing",
        explanation: "Graphite Pencil hyperrealistic drawing",
        link: "https://www.instagram.com/p/Cwg93kApq_C/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        url: art5,
    },
];

const ArtCards = () => {

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

                                            <li><a href={el.link}><LuLink /></a></li>

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

export default ArtCards;