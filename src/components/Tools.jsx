export default function DisplayTools() {
  const skills = [
    {
      name: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "CSS3",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
    },
    {
      name: "HTML5",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg",
    },
    {
      name: "GitHub",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
    },
    {
      name: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    },
    {
      name: "MongoDB",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    },
  ];
  return(
    <>
    {skills.map(skill => (
        <>
        <img className="toolImage" src={skill.src} /> 
        <p>{skill.name}</p>
        </>
    ))}
    </>
  )
}
