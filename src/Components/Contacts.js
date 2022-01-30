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

        <form>
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" />
          <label>Your Email</label>
          <input type="text" placeholder="Enter your Email" />
          <label>Message</label>
          <textarea cols="50" rows="7" placeholder="e.g Hello" />

          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
