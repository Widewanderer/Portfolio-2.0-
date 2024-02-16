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
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "30px 0",
  };

  const innerContainerStyle = {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    width: "100%",
    padding: "10px 25px",
    borderRadius: "10px",
    backgroundColor: "#167406",
    // backgroundColor: "#0E3608",
    // Limit the maximum number of items per row to 4
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
  };

  const skillStyle = {
    marginBottom: "8px",
    textAlign: "center",
    padding: "10px 20px",
    borderRadius: "15px",
    width: "100%",
    // backgroundColor: "white",
    backgroundColor: "#0B3D02",
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
  );
}

  // PURE SVG PROTOTYPE CONVERSION 

// import React from "react";
// import NodeSVG from '../assets/SVGs/node.svg';


// export default function DisplayTools() {
//   const skills = [
//     {
//       name: "Node",
//       icon: NodeSVG,
//     },
//     {
//       name: "Node2",
//       icon: NodeSVG,
//     },
//     {
//       name: "Node3",
//       icon: NodeSVG,
//     },
//     // Add other skills with their corresponding SVG icons
//   ];

//   return (
//     <div style={outerContainerStyle}>
//       <div style={innerContainerStyle}>
//         {skills.map((skill, index) => (
//           <div key={index} style={skillStyle}>
//             {/** Use the imported SVG component directly */}
//             <skill.icon className="toolImage" alt={skill.name} />
//             {/* <p>{skill.name}</p> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// const outerContainerStyle = {
//     display: "grid",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "100%",
//     margin: "30px 0",
//   };

//   const innerContainerStyle = {
//     display: "grid",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: "10px",
//     width: "100%",
//     padding: "10px 25px",
//     borderRadius: "10px",
//     backgroundColor: "#167406",
//     // backgroundColor: "#0E3608",
//     // Limit the maximum number of items per row to 4
//     gridTemplateColumns: "1fr 1fr 1fr 1fr",
//   };

//   const skillStyle = {
//     marginBottom: "8px",
//     textAlign: "center",
//     padding: "10px 20px",
//     borderRadius: "15px",
//     width: "100%",
//     // backgroundColor: "white",
//     backgroundColor: "#0B3D02",
//   };