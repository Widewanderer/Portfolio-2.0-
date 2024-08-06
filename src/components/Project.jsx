import * as projects from "../assets";
import '../App.css';


const pImageStyle = {
  width: "300px",
  height: "200px",
  objectFit: "cover",
  display: "block"
} 

function Project({ project }) {
  const { name, repo, link, description, image } = project;

  return (
    <div className="p-3">
      <img src={projects[image]} alt={name} style={pImageStyle}/>
      <div className="">
        <h1>
          <a href={link}>{name}</a>{" "}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
