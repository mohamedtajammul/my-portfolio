import '../Navbar.css'

function Button(props) {
    return (
        <a href="./assets/Resume2.pdf" target="_blank"><p className="main-nav__list--resume">{props.buttonName}</p></a>
        // <p className="main-nav__list--resume">{props.buttonName}</p>
    )
}

export default Button