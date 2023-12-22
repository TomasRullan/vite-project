import '../styles/About.css'
import profilePic from '../components/images/profilepic.png';

export default function About() {
  return (
    <div className="my-5">
      <h1 className="text-center mb-4">About Me</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 text-center">
          <img src={profilePic} alt="Picture of me" className="profile-pic mb-4" />
        </div>
        <div className="col-12 col-lg-8 about-text">
          <p className="text-justify">
            Greetings!<br>
            </br><br></br>
            Welcome to my portfolio. Im a 26 year old trying to break into tech ive learned alot so far and cant wait to learn more <br></br><br></br>

          <br></br><br></br>

          </p>
        </div>
      </div>
    </div>
  );
}

