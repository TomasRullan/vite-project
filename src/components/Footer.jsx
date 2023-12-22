import '../styles/Footer.css'
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";



export default function Footer() {
    return (
        <footer className='footer'>
            <a href='https://github.com/' target="_blank" rel="noopener noreferrer" aria-label="Link to Kevin Smith's Github profile">
                <BsGithub />
            </a>
            <a href='https://www.linkedin.com/feed/' target="_blank" rel="noopener noreferrer" aria-label="Link to Kevin Smith's LinkedIn profile">
                <BsLinkedin />
            </a>
        </footer>
    );
}