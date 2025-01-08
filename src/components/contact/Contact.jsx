import React, { useState } from 'react';
import { motion } from 'framer-motion';

import './Contact.scss';

const Contact = () => {
  const [notification, setNotification] = useState({ message: '', success: false, visible: false });

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8127ab2f-1296-4277-8632-ffe06d1fa97d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setNotification({ message: "Message sent successfully!", success: true, visible: true });
      } else {
        setNotification({ message: "Something went wrong. Please try again.", success: false, visible: true });
      }
    } catch (error) {
      setNotification({ message: "An error occurred. Please try again.", success: false, visible: true });
    } finally {
      setTimeout(() => setNotification({ ...notification, visible: false }), 3000); // Hide notification after 3 seconds
    }
  };

  const sectionAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const contact = "Contact Me";

  return (
    <motion.section
      className="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Animates once when 30% of the section is visible
      variants={sectionAnimation}
      transition={{ duration: 0.8 }}
    >
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.07 }}
        className="textContainer"
      >
        {contact.split("").map((char, index) => (
          <motion.span key={index} variants={sectionAnimation}>
            {char}
          </motion.span>
        ))}
      </motion.span>
      <form onSubmit={onSubmit}>
        <div className="input-box">
          <label>First name</label>
          <input type="text" className="field" placeholder="Enter your first name" name="first" required />
        </div>
        <div className="input-box">
          <label>Last name</label>
          <input type="text" className="field" placeholder="Enter your last name" name="last" required />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input type="text" className="field" placeholder="Enter your email address" name="email" required />
        </div>
        <div className="input-box">
          <label>Message</label>
          <textarea
            name="message"
            className="field mess"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>

      {notification.visible && (
        <motion.div
          className={`notification ${notification.success ? 'success' : 'error'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {notification.message}
        </motion.div>
      )}
    </motion.section>
  );
};

export default Contact;
