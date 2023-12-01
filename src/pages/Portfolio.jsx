import ProjectCard from "../components/Cards.jsx";

function Portfolio() {
  // fill in the required data, image file should be in the assets/projects folder and name should match the "default as " statment in index.js
  const projects = [
    {
      name: "Cultured Cusine",
      description:
        "A Recipe site which emerses the user in the culture of the cuisine's region. Recipes are classified by region and accoumpanied by cultural information from said region. ",
      // live site
      link: "https://culturedcuisine-59da43e6096e.herokuapp.com/",
      // github repo
      repo: "https://github.com/Widewanderer/CulturedCuisine",
      // name of project image
      image: "culturedCuisine",
    },
    {
      name: "Tech Blog",
      description:
        "A simple CMS style blog site built in the MVC paradigm structure. Finished version of site will allow users to sign in, make, edit, and delete posts, as well as comment on posts. Website uses Sequilize for ORM, and the express-session npm package for authentication.",
      link: "https://the-great-slavic-tech-blog-4107dec86ccf.herokuapp.com/",
      repo: "https://github.com/Widewanderer/Tech-Blog",
      image: "TechBlog",
    },
    {
      name: "Melody Mapper",
      description: " ",
      link: "https://the-great-slavic-tech-blog-4107dec86ccf.herokuapp.com/",
      repo: "https://github.com/Widewanderer/Tech-Blog",
      image: "MelodyMapper",
    },
    {
      name: "Weather Wise",
      description: " ",
      link: "https://the-great-slavic-tech-blog-4107dec86ccf.herokuapp.com/",
      repo: "https://github.com/Widewanderer/Tech-Blog",
      image: "WeatherWisePic",
    },
  ];

  // for each project, use the Project component to build a project
  return (
    <div>
      <div className="d-flex">
        {projects.map((project) => (
          <ProjectCard project={project} key={"project-" + project.name} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
