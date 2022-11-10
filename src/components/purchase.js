import React from "react";
import "./purchase.css";
import { FaAmazon, FaBtc, FaCheck, FaEthereum, FaIcons, FaPaypal } from "react-icons/fa";


const site = "https://gloaccount.sellix.io/product/63616e956436a";

function purchase(a){
  if (a!=="a"){
    window.open("https://gloaccount.sellix.io/product/63616e956436a")
  } else{
    window.open("google.com")
  } 
}

const features = () => {
  return (
    <div className="purchase">
      <div className="mask">
        <h1>Purchase</h1>
        <div className="cards">
          <div className="card1" onClick={() => purchase("d")}>
            <h1 className="icon">
              <FaPaypal />
            </h1>
            <h5>Paypal</h5>
            <h5>£5</h5>
            <p>
              Insant
            </p>
          </div>

          <div onClick={() => purchase("d")} className="card1 ">
            <h1 className="icon">
              <FaBtc />
            </h1>
            <h5>BTC</h5>
            <h5>£7</h5>
            <p>
              30m-2h depending on blockchain
            </p>
          </div>

          <div onClick={() => purchase("d")} className="card1">
            <h1 className="icon">
              <FaEthereum />
            </h1>
            <h5>ETH</h5>
            <h5>£7</h5>
            <p>
              30m-2h depending on blockchain
            </p>
          </div>

          <div onClick={() => purchase("a")} className="card1">
            <h1 className="icon">
              <FaAmazon />
            </h1>
            <h5>Amazon Giftcard</h5>
            <h5>£5</h5>
            <p>
              1h-2d
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default features;
