

// PURE SVG PROTOTYPE CONVERSION

import React from "react";
import JavaScriptSVG from "../assets/SVGs/javaScript.svg";
import CssSVG from "../assets/SVGs/css.svg";
import HTMLSVG from "../assets/SVGs/html.svg";
import NodeSVG from "../assets/SVGs/node.svg";
import ReactSVG from "../assets/SVGs/react.svg";
import GitHubSVG from "../assets/SVGs/github.svg";
import MongoDBSVG from "../assets/SVGs/mongoDB.svg";
import Express from "../assets/SVGs/express.svg";

export default function DisplayTools() {
  const skills = [
    {
      name: "javascript",
      icon: JavaScriptSVG,
    },
    {
      name: "css",
      icon: CssSVG,
    },
    {
      name: "html",
      icon: HTMLSVG,
    },
    {
      name: "github",
      icon: GitHubSVG,
    },
    {
      name: "node.js",
      icon: NodeSVG,
    },
    {
      name: "react",
      icon: ReactSVG,
    },
    {
      name: "mongoDB",
      icon: MongoDBSVG,
    },
    {
      name: "express.js",
      icon: Express,
    },
    // Add other skills with their corresponding SVG icons
  ];

  return (
    <div style={outerContainerStyle}>
      <div style={innerContainerStyle}>
        {skills.map((skill, index) => (
          <div key={index} style={skillStyle}>
            {/** Use the imported SVG component directly */}
            <img src={skill.icon} className="toolImage"/>
            {/* <skill.icon className="toolImage" alt={skill.name} /> */}
            <p style={skillScriptStyle}>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const outerContainerStyle = {
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  margin: "20px 0",
};

const innerContainerStyle = {
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  width: "100%",
  padding: "10px 50px",
  borderRadius: "30px",
  backgroundColor: "#167406", // light green background of tools container
  // backgroundColor: "#0E3608",
  // Limit the maximum number of items per row to 4
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
};

const skillStyle = {
  marginBottom: "10px",
  textAlign: "center",
  padding: "10px 35px",
  borderRadius: "30px",
  width: "100%",
  backgroundColor: "#0B3D02",
};

const skillScriptStyle = {
  color: "black",
  fontWeight: "600",
};
