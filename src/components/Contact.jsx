import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    // Mock submission
    setStatus("✅ Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Me</h2>
          <p>
            I'm currently open to new opportunities, collaborations, and projects. Feel free to reach
            out to me!
          </p>
          <ul className="contact-details">
            <li><strong>Email:</strong> <a href="mailto:nimeshdilshan440@gmail.com">nimeshdilshan440@gmail.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+94769230572">076 923 0572</a></li>
            <li><strong>Location:</strong> Mahakanadarawa, Mihintale, Sri Lanka</li>
          </ul>
        </div>

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
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>

      <div className="map-container">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.453652325267!2d80.5112!3d8.3786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcad76813792cd%3A0x89b7a5c241d2313b!2sMahakanadarawa%2C%20Mihintale!5e0!3m2!1sen!2slk!4v1716900000000"
          width="100%"
          height="600" // <-- Increased from 300 to 600
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>




    </section>
  );
}
