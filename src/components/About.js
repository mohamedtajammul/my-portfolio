import './About.css'

import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

function About(props) {

    const imgRef = useRef(null)
    const descriptionRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(imgRef.current, {
            opacity: 0,
            x: -50,

        }, {
            duration: 2,
            opacity: 1,
            x: 0,
            ease: "Bounce.easeOut",
            scrollTrigger: {
                trigger: '.about__container--img',
                start: 'top center',
            }
        })

        gsap.fromTo(descriptionRef.current, {
            opacity: 0,
            x: 50,

        }, {
            duration: 2,
            opacity: 1,
            x: 0,
            ease: "Bounce.easeOut",
            scrollTrigger: {
                trigger: '.about__container--description',
                start: 'top center',
            }
        })
    }, [])

    return (
        <section id="about">
            <h2 className="about__heading">About me</h2>
            <div className="about__container">
                <div className="about__container--img" ref={imgRef}>
                    <div className="about__container--img__div">
                        <img src="./assets/my-photo.jpg" alt="" />
                    </div>
                </div>
                <div className="about__container--description" ref={descriptionRef}>
                    <p>My name is K Mohamed Tajammul, I am a Full Stack Web Developer and a Computer Science Engineer.
                        <br /><br />
                        I love working on new and exciting technologies emerging nowadays. I have good work experience as a MERN Stack Developer and as a 3D web developer in startup(s) where I was core member of the development team.</p>
                </div>
            </div>
        </section>
    )
}

export default About