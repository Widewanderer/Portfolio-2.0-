import DisplayTools from "../components/Tools.jsx";

const PTagStyle = {
  padding: "10px 5vw",
};


export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p style={PTagStyle}>
        Welcome! My name is Slava, and I am a full-stack web developer. I have
        experience with JavaScript, CSS, HTML, React, Git, MongoDB, ORM, MVC,
        PWAs, MySQL, Node.js, and more. I have worked on team projects, have an
        organization-centered outlook, and good communication skills.
      </p>
      <p style={PTagStyle}>
        I was first introduced to programming by my brother, who would speak to
        me about his work and basic computer science topics. This is where my
        interest first began, and without him, I doubt I would have ever had the
        inspiration to begin my journey into the world of web development.
        I began programming myself in 2021 and at first, I
        just learned some simple concepts. I started by learning a little
        JavaScript, watching some videos, and experimenting with VS Code. In the
        fall of 2022, I worked through Codecademy's Learn JavaScript course. It
        was then I decided to pursue programming more seriously and enrolled in
        a Fullstack JavaScript Bootcamp through Vanderbilt University. I labored
        through the 6-month course after work and on weekends and finished my coursework in December 2024. Since then, I have continued to develop using both self and assisted study. I
        am also learning supplementary STEM skills using tools such as the Brilliant app, IT lecutures on YouTube, audio books, and other resources.
      </p>
      <p style={PTagStyle}>
        Though the bootcamp was Fullstack, I feel that I am most attracted to
        Front end development. There is something about creating a work of art
        and funcitonality that is particularly rewarding to me. Thus, I will
        continue to focus on front end development and design in the future
        especially React. For now, I will continue to develop my skills by
        working on projects such as this website,studying general IT skills,
        learning simple animation with framer-motion, practicing with
        CodeAcademy, and with sites such as HackerRank and CodeWars.
      </p>
      {/* <p>( What I am doing now// What I want to do in the future//)</p> */}
      <DisplayTools />
      <p style={PTagStyle}>
     
      </p>
    </div>
  );
}
