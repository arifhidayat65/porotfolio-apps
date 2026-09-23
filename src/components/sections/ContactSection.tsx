import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Mail, MapPin, Send } from 'lucide-react';
import { usePortfolioData } from '../../hooks/usePortfolioData';
import './ContactSection.css';

const ContactSection = () => {
  const { profile } = usePortfolioData();
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
        text: `Thanks, ${profile?.firstName || 'Arif'} ${profile?.lastName || 'Hidayat'} will get back to you soon.`,
        confirmButtonColor: '#4f46e5',
        timer: 3000
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch.</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info-side">
            <h3 className="sub-title">Contact Information</h3>
            <p className="contact-desc">Feel free to reach out for collaborations or just a friendly hello!</p>
            
            <div className="info-list">
              <div className="info-item">
                <div className="info-icon-wrapper">
                  <Mail size={22} />
                </div>
                <div className="info-details">
                  <h4>Email</h4>
                  <p><a href={`mailto:${profile?.email}`}>{profile?.email || 'arifhidayat1010@gmail.com'}</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper secondary">
                  <MapPin size={22} />
                </div>
                <div className="info-details">
                  <h4>Location</h4>
                  <p>{profile?.location || 'Karawang, Indonesia'}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="pinput"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="pinput"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  placeholder="Your Message" 
                  className="pinput" 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-contact btn-primary">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
