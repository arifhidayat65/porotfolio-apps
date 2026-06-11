import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate sending with SweetAlert
    Swal.fire({
      title: 'Sending...',
      text: 'Please wait while we deliver your message',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    setTimeout(() => {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thanks, Arif Hidayat will get back to you soon.',
        confirmButtonColor: '#669db3',
        timer: 3000
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">contact.</h2>
          <hr className="title-line" />
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="name" 
                className="pinput"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="email" 
                className="pinput"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                placeholder="message" 
                className="pinput" 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-contact">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
