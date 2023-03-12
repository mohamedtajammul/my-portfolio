import './Contact.css'

import Button from './helper-components/Button'

function Contact() {
    return (
        <section id="contact">
            <h1 className="contact__heading">Contact</h1>
            <h2 className="contact__heading2">Get In Touch</h2>
            {/* <p className="contact__para">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p> */}
            {/* <p className="contact__para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus optio perferendis praesentium temporibus non ea aliquam hic, nihil laboriosam modi.</p> */}
            <a href="mailto:tajammul183@gmail.com">
                {/* <Button buttonName={'Say Hi!'} /> */}
                <p className="contact__button">Say Hi</p>
            </a>
        </section >
    )
}

export default Contact