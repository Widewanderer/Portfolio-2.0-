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
    {
      name: "MongoDB",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {
      name: "MongoDB",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    },
  ];

  const outerContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // height: "140px", // Adjust as needed
    width: "100%",
  };

  const innerContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px",
    width: "50%",
    padding: "5px",
    borderRadius: "10px",
    backgroundColor: "#0E3608",
    // backgroundColor: "#1C4E15",
  };

  const skillStyle = {
    marginBottom: "8px", // Adjust as needed
    textAlign: "center",
    margin: "0 15px",
    padding: "15px",
    margin: "5px 5px",
    width: "23%",
    borderRadius: "10px",
    backgroundColor: "#051902",
  };

  // could modify "toolImage" to directly change size of SRCs 
  
// 

  return (
    <div style={outerContainerStyle}>
      <div style={innerContainerStyle}>
        {skills.map((skill, index) => (
          <div key={index} style={skillStyle}>
            <img className="toolImage" src={skill.src} alt={skill.name} />
            {/* <p>{skill.name}</p> */}
          </div>
        ))}
      </div>
    </div>

    //   return(
    //     <>
    //     {skills.map(skill => (
    //         <>
    //         <img className="toolImage" src={skill.src} />
    //         <p>{skill.name}</p>
    //         </>
    //     ))}
    //     </>
  );
}
