import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

function Contact() {

  const form = useRef();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(null);
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a39ikyl",
        "template_aa2bc1g",
        form.current,
        "user_uQBgnEafnOQdUzPxQrpGd"
      )
      .then(
        (result) => {
          setResult(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      resetField();
  };

  const resetField = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setPhone("");
    setMessage("");
  };
  return (
    <div className="contact">
      <div className="contact__title">
        <h1>Get in touch !</h1>
        <p>
          Need Help and no clue where to Start ??   Contact us to get help...
        </p>
      </div>
       <div className="contact__title1">
      </div>
      <div className="contact__container">
        <div className="contact__form">
          <form ref={form} onSubmit={handleSubmit}>

            {result === "OK" ?(<span
              id="successMessage"
              style={{ color: "purple", fontSize: "18px", padding: "15px" }}
            >
              Your email has been send..
            </span>): null
            }

            <input
              placeholder="First Name"
              type="fname"
              value={firstname}
              name="first_name"
              required
              onChange={(e) => setFirstname(e.target.value)}
            />

            <input
              placeholder="Last Name"
              type="lname"
              name="last_name"
              value={lastname}
              required
              onChange={(e) => setLastname(e.target.value)}
            />
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Phone Number"
              type="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <textarea
              placeholder="Write your message.."
              type="messageBox"
              required
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;