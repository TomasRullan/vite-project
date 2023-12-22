import '../styles/Resume.css'

export default function Resume() {
  return (
    <div className="resume-container">
      <h1 className="resume-heading">Resume</h1>
      <a className="resume-download-link" href="" target="_blank" rel="noopener noreferrer" aria-label="Link to Kevin Smith's Resume">
        Download my Resume
      </a>
      <div className="proficiency-section">
        <h2>Front End Proficiencies</h2>
        <ul>
          <li>HTML/CSS</li>
          <li>Javascript/jQuery</li>
          <li>Mobile Responsiveness</li>
          <li>Bootstrap</li>
          <li>Progressive Web Applications</li>
          <li>Local Storage/Session Storage/IndexedDB</li>
          <li>MERN Stack (React.js)</li>
        </ul>
      </div>
      <div className="proficiency-section">
        <h2>Back End Proficiencies</h2>
        <ul>
          <li>MySQL</li>
          <li>MongoDB/Mongoose</li>
          <li>User Authentication</li>
          <li>MERN Stack (Express.js, Node.js)</li>
          <li>API Design (Rest, GraphQL)</li>
          <li>Template Engines</li>
        </ul>
      </div>
    </div>
  );
}


