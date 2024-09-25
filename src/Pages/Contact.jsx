import React from 'react';
import './Contact.css'; 

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-content">
        <div className="contact-form-section">
          <h2>Get in Touch</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
        <div className="contact-info-section">
          <h2>Store Information</h2>
          <div className="info-group">
            <h3>Address</h3>
            <p>123 Fashion Street, Vijay-Nagar Indore 452020</p>
          </div>
          <div className="info-group">
            <h3>Phone</h3>
            <p>+91 8120023229</p>
          </div>
          <div className="info-group">
            <h3>Email</h3>
            <p>thestreetstore@gmail.c om</p>
          </div>
          <div className="info-group">
            <h3>Store Hours</h3>
            <p>Monday - Saturday: 10am - 8pm</p>
            <p>Sunday: 12pm - 6pm</p>
          </div>
     
        </div>
        <div className="map-container">
          <div className="ouraddress">
            <h2>Our Address</h2>
          </div>
            <iframe
              title="Store Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.422308625499!2d75.89290237607041!3d22.749703779366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd6995442275%3A0xcdc44a9b591166df!2sThe%20Prime%20Step%20Computer%20Classes%20and%20Placement%20Institute%20%7C%20Python%20Programming!5e0!3m2!1sen!2sin!4v1725626879717!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
      </div>
    </div>
  );
}
