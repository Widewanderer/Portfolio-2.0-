import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    title: "",
    name: "",
    email: "",
    message: "",
  });

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
      <p>
        ( Contact info// / Links to email, github, linkedin, resume,// Email
        form? )
      </p>
      {/* flex direction column in container to stack form elements */}
      <form onSubmit={sendEmail}>
        <label for="title">Email Subject</label>
        <input
          value={formState.title}
          type="text"
          name="title"
          onChange={handleChange}
        />
        <label for="name">Your Name</label>
        <input
          value={formState.name}
          type="text"
          name="name"
          onChange={handleChange}
        />
        <label for="email">Email</label>
        <input
          value={formState.email}
          type="email"
          name="email"
          onChange={handleChange}
        />
        <label for="message">Message</label>
        <textarea
          value={formState.message}
          name="message"
          onChange={handleChange}
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
