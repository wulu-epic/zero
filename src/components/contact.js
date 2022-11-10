import React from "react";
import "./contact.css";
import { FaAmazon, FaBtc, FaCheck, FaDiscord, FaEthereum, FaIcons, FaPaypal } from "react-icons/fa";

function open(){
  window.open("https://discord.gg/QNwYj7BJjR")
}

const contact = () => {
  
  return (
    <div className="contact" id = "contact">
      <div className="mask">
        <h1>Contact</h1>
        <div className="cards">
          <div onClick={() => open()} className="card1">
            <h1 className="icon">
              <FaDiscord />
            </h1>
            <h5>Discord Server</h5>
            <p>
              Join For Support!
            </p>
          </div>

         

        </div>
      </div>
    </div>
  );
};

export default contact;
