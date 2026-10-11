import "./NavigationBar.css"
import profileImage from "../assets/NavigationBar-profile-image.jpeg"

function NavigationBar(){
    return (
        <nav>
            <img src={profileImage} alt="portrait"/>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
        </nav>
    )
}

export default NavigationBar