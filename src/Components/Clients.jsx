import React from "react";
import clients1 from "../assets/clients1.png";
import clients2 from "../assets/clients2.png";
import clients3 from "../assets/clients3.png";
import clients4 from "../assets/clients4.png";

const Clients = () => {
  let data = [clients1, clients2, clients3, clients4];
  return (
    <div className="client" data-aos="fade-up" data-aos-duration="1000">
      <div className="container">
        <div className="clients-container">
          {data.map((client, i) => (
            <div className="client" key={i}>
              <img src={client} alt="Client" className="client" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
