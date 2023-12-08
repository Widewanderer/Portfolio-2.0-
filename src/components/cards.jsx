import Card from "react-bootstrap/Card";
import * as projects from "../assets";

function ProjectCard({ project }) {
  const { name, repo, link, description, image } = project;
  return (
    <Card style={{ width: "30rem", margin: "10px", marginTop: "25px" }}>
      <a href={link}>
        <Card.Img
          style={{ height: "280px" }}
          variant="top"
          src={projects[image]}
          alt={name}
        />
        <Card.Title>{name}</Card.Title>
      </a>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Link href={repo}>
        {" "}
        <i className="fab fa-github" style={{ fontSize: "30px" }}></i> GitHub
      </Card.Link>
    </Card>
  );
}

function ProjectCardList({ projects }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin: "20px",
      }}
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}

//export default ProjectCard;
export default ProjectCardList;
