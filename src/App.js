import "./App.css";

function App() {
  return (
    <div className="container">
      
      {/* PROFILE PHOTO */}
      <img
        src="/profile.jpg"
        alt="Krishna Chauhan"
        className="profile-pic"
      />

      <h1>Krishna Chauhan</h1>
      <p className="bio">
        Mining Engineering Student at NITK | Competitive Programmer | Web Learner
      </p>

      <h2>Skills</h2>
      <ul className="skills">
        <li>C++</li>
        <li>Data Structures</li>
        <li>React</li>
        <li>Problem Solving</li>
      </ul>

      <h2>Projects</h2>
      <p>• Portfolio Website</p>

      <h2>Contact</h2>
      <a href="https://github.com/krishnachauhan510">GitHub</a> |{" "}
      <a href="https://www.linkedin.com/in/krishna-chauhan-188863325/">
        LinkedIn
      </a>
    </div>
  );
}

export default App;
