import { useState } from "react";

const SendEmailStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "'Teko', sans-serif",
  fontWeight: 500,
  fontSize: "70px",
};

export default function Contact() {
  const [formState, setFormState] = useState({
    title: "",
    name: "",
    email: "",
    message: "",
  });
  const tableWidth = { width: "40vw" };

  function sendEmail(e) {
    e.preventDefault();

    emailjs.send("service_iwhoi0d", "template_jy3vf2g", formState).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        // display some success message
        setFormState({
          title: "",
          name: "",
          email: "",
          message: "",
        });
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  }
  // Takes in value set by [name] and sets it to the value of the input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    console.log(name, value);
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <h3 style={SendEmailStyle}>Send me an email!</h3>
      <p>
        {/* ( Contact info// / Links to email, github, linkedin, resume,// Email
        form? ) */}
      </p>
      {/* flex direction column in container to stack form elements */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form onSubmit={sendEmail}>
          <table>
            <tr>
              <td>
                <label htmlFor="title">Email Title</label>
              </td>
              <td>
                <input
                  style={tableWidth}
                  value={formState.title}
                  type="text"
                  name="title"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="name">Your Name</label>
              </td>
              <td>
                <input
                  style={tableWidth}
                  value={formState.name}
                  type="text"
                  name="name"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Email</label>
              </td>
              <td>
                <input
                  style={tableWidth}
                  value={formState.email}
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="message">Message</label>
              </td>
              <td>
                <textarea
                  style={{ ...tableWidth, height: "180px" }}
                  height="200px"
                  value={formState.message}
                  name="message"
                  onChange={handleChange}
                />
              </td>
              {/* <td>
                <input type="submit" value="Send" />
              </td> */}
            </tr>
          </table>
          <div 
          style= {{
          display: "flex", 
          justifyContent: "center"}}>
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
}
