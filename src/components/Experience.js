import ExperienceContainer from './experience-components/ExperienceContainer'

import './Experience.css'

const experience = [
    {
        duration: '2020 Dec - 2022 Sep',
        companyName: '4Lunches',
        role: 'Full Stack Web Developer',
        description: 'I worked as a Full Stack Developer in MERN Stack with 4Lunches. I managed both frontend and backend part of the codebase along with deployment. I also worked on creating AR experiences for Instagram using the SparkAR tool and Babylon.js for 3D in web. '
    },
    {
        duration: '2022 Sep - Present',
        companyName: 'Reverie Language Technologies',
        role: 'Product Engineer',
        description: 'I am currently working as a Product Engineer in MERN Stack.'
    }
]

const experienceContainer = experience.map((job) => {
    return <ExperienceContainer key={job.companyName} duration={job.duration} companyName={job.companyName} role={job.role} description={job.description} />
})

function Experience() {
    return (
        <section id="experience">
            <h2 className="experience__heading">Experience</h2>
            {experienceContainer}
        </section>
    )
}

export default Experience