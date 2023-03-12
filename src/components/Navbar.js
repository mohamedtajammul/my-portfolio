import React, { useRef, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import Button from './helper-components/Button'
import './Navbar.css'

import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)


function Navbar() {

    const navRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(navRef.current, {
            opacity: 0,
            y: -50,
        }, {
            duration: 1,
            opacity: 1,
            y: 0,
            ease: "Back.easeOut",
            scrollTrigger: {
                trigger: '.main-nav',
                start: 'top top',
            }
        })
    }, [])

    // const hamburger = document.querySelector('.hamburger')
    const hamburgerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    function clickHandler() {
        setIsVisible(prev => !prev)
        hamburgerRef.current.classList.toggle('clicked')
        // !isVisible ? hamburgerRef.current.classList.add('clicked') : hamburgerRef.current.classList.remove('clicked')
    }

    const styles = {
        visibility: `${isVisible ? 'visible' : 'hidden'}`,
        transform: `${isVisible ? 'translateX(0vw)' : 'translateX(100vw'}`
    }

    return (
        <nav className='main-nav' ref={navRef}>
            <div className="main-nav__logo">TJ</div>
            <div className="main-nav__list">
                <ul>
                    {/* <li><NavLink to='/about' ><span>02.</span> About</NavLink></li> */}
                    {/* <li><span>01.</span> Home</li> */}
                    <li><HashLink to='#home' smooth ><span>01.</span> Home</HashLink></li>
                    <li><HashLink to='#about' smooth ><span>02.</span> About</HashLink></li>
                    {/* <li><NavLink to='/about'><span>02.</span> About</NavLink></li> */}
                    <li><HashLink to='#skills' smooth ><span>03.</span> Skills</HashLink></li>
                    <li><HashLink to='#experience' smooth ><span>04.</span> Experience</HashLink></li>
                    <li><HashLink to='#contact' smooth ><span>05.</span> Contact</HashLink></li>
                    {/* <li><span>02.</span> About</li> */}
                    {/* <li><span>03.</span> Skills</li>
                    <li><span>04.</span> Experience</li>
                    <li><span>05.</span> Contact</li> */}
                    {/* <p className="main-nav__list--resume">Resume</p> */}
                    {/* <Button buttonName={'Resume'} /> */}
                    <a href="./assets/Resume2.pdf" target="_blank"><p className="main-nav__list--resume">Resume</p></a>
                </ul>
            </div>
            <div className='hamburger' ref={hamburgerRef} onClick={clickHandler}>
                <div className='line-1'></div>
                <div className='line-2'></div>
                <div className='line-3'></div>
            </div>
            <div className="hamburger-menu" style={styles}>
                <ul>
                    <li><HashLink to='#home' smooth ><span>01.</span> Home</HashLink></li>
                    <li><HashLink to='#about' smooth ><span>02.</span> About</HashLink></li>
                    <li><HashLink to='#skills' smooth ><span>03.</span> Skills</HashLink></li>
                    <li><HashLink to='#experience' smooth ><span>04.</span> Experience</HashLink></li>
                    <li><HashLink to='#contact' smooth ><span>05.</span> Contact</HashLink></li>
                    {/* <li><span>01.</span> Home</li> */}
                    {/* <li><span>02.</span> About</li> */}
                    {/* <li><span>03.</span> Skills</li>
                    <li><span>04.</span> Experience</li>
                    <li><span>05.</span> Contact</li> */}
                    {/* <Button buttonName={'Resume'} /> */}
                    {/* <p className="hamburger-menu">Resume</p> */}
                    <a href="./assets/Resume2.pdf" target="_blank"><p className="main-nav__list--resume">Resume</p></a>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar