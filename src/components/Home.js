import { useEffect, useRef } from 'react'

import Left from './home-components/Left'
import Right from './home-components/Right'

import './Home.css'

import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

function Home(props) {

    const homeRef = useRef()

    // useEffect(() => {
    //     gsap.to(homeRef.current.children, {
    //         duration: 1,
    //         opacity: 1,
    //         // ease: "Power3.out",
    //         // stagger: 0.5,
    //         // scrollTrigger: {
    //         //     trigger: '.home__container',
    //         //     start: 'top top',
    //         //     // markers: true
    //         // }
    //     })
    //     console.log(homeRef)
    // }, [])

    return (
        <section id="home">
            <Left />
            <div className="home__container" ref={homeRef}>
                <p className="home__container--para">Hi, my name is</p>
                <h1 className="home__container--name">{props.details.name}</h1>
                <h2 className="home__container--designation">{props.details.designation}</h2>
                <p className="home__container--description">{props.details.description}</p>
            </div>
            <Right mail={props.details.mail} />
        </section>
    )
}

export default Home