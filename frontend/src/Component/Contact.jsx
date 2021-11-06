import React, { useState } from "react";
import "../Css/trial.css";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import Landingpage from "./Landing_page";
import { addDetail } from "../Services/api";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const initialvalues = {
  name: "",
  email: "",
  message: "",
};

const Trial = () => {
  const [contact, setContact] = useState(initialvalues);
  const { name, email, message } = contact;
  const onValueChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const history = useHistory();
  const addUserMessage = async () => {
    await addDetail(contact);
    alert("Message Send");
    history.push("/");
  };
  return (
    <div>
      <Landingpage />
      <section className="contact">
        <div className="content">
          <h2 className="h2">Contact Us</h2>
          <p>
            hi am gaurav haral and am a freelancer web developer if you have any
            web and any android application then contact me
          </p>
        </div>
        <div className="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <HomeIcon />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  Engineer Gaurav Haral
                  <br />
                  Biroba Nagar Kolhewadi
                  <br />
                  Sangamner 422605
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <PhoneIcon />
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>7387792023</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <EmailIcon />
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>gauravharal1001@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <h2>send message</h2>
              <div className="inputBox">
                <input
                  required="required"
                  onChange={(e) => onValueChange(e)}
                  name="name"
                  value={name}
                />
                <span className="spans"> Full Name</span>
              </div>
              <div className="inputBox">
                <input
                  name="email"
                  onChange={(e) => onValueChange(e)}
                  value={email}
                  required="required"
                />
                <span className="spans">Email</span>
              </div>
              <div className="inputBox">
                <textarea
                  required="required"
                  onChange={(e) => onValueChange(e)}
                  name="message"
                  value={message}
                />
                <span className="spans">Type Your Message</span>
              </div>
              <div className="inputBox">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addUserMessage()}
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trial;
