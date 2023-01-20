import React from 'react';
import './ContactUs.css'

function ContactUs() {
    return (
    <form className="contact-form">
      <h1>Contactez-nous</h1>
      <div className="form-group">
        <label htmlFor="firstName">Prénom</label>
        <input type="text" id="firstName" placeholder="Entrez votre prénom" required />
        <label htmlFor="lastName">Nom</label>
        <input type="text" id="lastName" placeholder="Entrez votre nom" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Entrez votre adresse email" required />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Sujet</label>
        <select id="subject" required>
          <option value="" selected disabled hidden>Choisissez un sujet</option>
          <option value="question">Question</option>
          <option value="feedback">Retour d'expérience</option>
          <option value="problem">Problème</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" rows="4" placeholder="Entrez votre message" required></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default ContactUs;
