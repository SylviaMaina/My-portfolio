import React from "react";
import { Link } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";
import "./Contacts.css";

function Contacts() {
  return (
    <div className="contact">
      <div className="arrow-home">
        <Link to="/">
          <ArrowBack className="arrow" />
        </Link>

        <form
          action="https://formsubmit.co/sylviamaina16@gmail.com"
          method="POST"
        >
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" />
          <label>Your Email</label>
          <input type="text" placeholder="Enter your Email" required />
          <label>Message</label>
          <textarea cols="50" rows="7" placeholder="Enter your message here" />
          <input
            type="hidden"
            name="_next"
            value="http://sylvia-maina.netlify.app/thanks.html"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
