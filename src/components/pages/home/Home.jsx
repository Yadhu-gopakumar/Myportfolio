import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import './Home.css';
import hero from '../../assets/hero.svg';
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-scroll";
import { FaPaperPlane } from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const [typeEffect] = useTypewriter({
        words: ["Fullstack Developer", "programmer", "Artist", "Freelancer",],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 80,
    }
    )
    gsap.to("#behindtext", {
        scrollTrigger: {
            scrub: true
        },
        translateX: -550,
        translateY: 100,


    })

    return (

        <section id="home">
            <div className="left">
                <span className="behindtext" id="behindtext">
                    YADHU
                </span>
                <div className="content">
                    <div className="bigtext">Hi There,</div>
                    <div className="bigtext">I'm <span className="name">Yadhu Gopakumar </span></div>
                    <div className="smalltext">I'm a <span className="name">{typeEffect}</span><span><Cursor cursorColor="grey" cursorStyle="|" /></span></div>
                    <div><Link to="contact" smooth={true}><button>Lets Talk <FaPaperPlane /></button>
                    </Link></div>
                </div>
            </div>
            <div className="right">

                <img src={hero} alt="hero"></img>

            </div>
        </section>

    );
}
export default Home