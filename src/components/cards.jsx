import Card from "react-bootstrap/Card";
import * as projects from "../assets";

function ProjectCard({ project }) {
  const { name, repo, link, description, image } = project;
  return (
    <Card style={{ width: "30rem", margin:"10px" }}>
      <a href={link}>
        <Card.Img style={{height:"280px"}} variant="top" src={projects[image]} alt={name} />
        <Card.Title>{name}</Card.Title>
      </a>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Link href={repo}>
        {" "}
        <i className="fab fa-github"></i>
      </Card.Link>
    </Card>
  );
}

export default ProjectCard;
