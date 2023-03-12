import '../Home.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function Left() {
    return (
        <aside id="left">
            <ul>
                <li><a target="_blank" href="https://www.linkedin.com/in/tajammul-mohamed-k-41310718b/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
        </aside >
    )
}

export default Left