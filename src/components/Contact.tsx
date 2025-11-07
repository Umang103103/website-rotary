import React from "react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="section-description">
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>

        <div className="contact-wrapper">
          <div className="contact-form-container">
            {submitted ? (
              <div className="success-message">
                <h3>✓ Thank You!</h3>
                <p>
                  We've received your message and will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="contact-info">
            <div className="info-card">
              <h3>Email</h3>
              <p>rotarydhulikhel@gmail.com</p>
            </div>
            <div className="info-card">
              <h3>Meeting Time</h3>
              <p>Every Friday, 5:00 PM</p>
            </div>
            <div className="info-card">
              <h3>Location</h3>
              <p>Dhulikhel, Nepal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
