import React from "react";

const content = [
  {
    title: "Become a Member",
    text: "Submit your CV at rotarydhulikhel@gmail.com to join our club.",
  },
  {
    title: "Partnership Opportunities",
    text: "International clubs can partner with us for global grant projects.",
  },
];
const GetInvolved = () => {
  return (
    <section className="section" id="involve">
      <div className="container">
        <h2>Get Involved</h2>
        <p className="section-description">
          Join us in making a positive impact. There are many ways to contribute
          to our mission.
        </p>
        <div className="feature-grid">
          {content.map((item, i) => (
            <div key={i} className="feature-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
