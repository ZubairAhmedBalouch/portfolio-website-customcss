// pages/contact.tsx

"use client";

import React from "react";
import "../style/contact.css"

export default function Contact() {
  return (
    <>
      
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-description">
            We’d love to hear from you! Please fill out the form below to get in touch.
          </p>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" className="form-input" required />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" className="form-input" required />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" rows={5} className="form-textarea" required />
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>
      
    </>
  );
}
