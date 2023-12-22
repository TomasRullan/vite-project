import '../styles/About.css'
import profilePic from '../components/images/profilePic.png';

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
            Welcome to my portfolio. Im a 26 year old trying to break into tech ive <br></br><br></br>

            With a robust background in finance, manufacturing, and operations management within the defense sector, I have developed strong leadership abilities and a knack for managing complex programs. My goal is to leverage these skills, combined with my newfound software development expertise, to make a mark as a Software Engineer in the defense industry.<br></br><br></br>

          </p>
        </div>
      </div>
    </div>
  );
}

