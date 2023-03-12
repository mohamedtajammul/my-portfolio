import { useEffect, useRef } from 'react'

import SkillsContainer from './skills-components/SkillsContainer'
import './Skills.css'

import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

function Skills() {

    const skillsRef = useRef()

    useEffect(() => {
        gsap.to(skillsRef.current.children, {
            duration: 1,
            opacity: 1,
            ease: "Power3.out",
            stagger: 0.5,
            scrollTrigger: {
                trigger: '.skills__container',
                start: 'top center',
                // markers: true
            }
        })
    }, [])

    const skillsObj = [
        {
            className: 'skills__container--frontend',
            heading: 'Frontend',
            list: ['HTML5', 'CSS3', 'Javascript', 'React.js']
        },
        {
            className: 'skills__container--backend',
            heading: 'Backend',
            list: ['Node.js', 'Express.js', 'MongoDB']
        },
        {
            className: 'skills__container--other',
            heading: 'Other',
            list: ['Babylon.js', 'Version control - Git', 'GSAP', 'SparkAR', 'MaterialUI']
        }
    ]

    const skills = skillsObj.map((skill) => {
        return <SkillsContainer key={skill.heading} className={skill.className} heading={skill.heading} list={skill.list} />
    })

    return (
        <section id="skills">
            <h2 className='skills__heading'>Skills</h2>
            <div className="skills__container" ref={skillsRef}>
                {skills}
            </div>
        </section>
    )
}

export default Skills