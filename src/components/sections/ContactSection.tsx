import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Mail, MapPin, Send, Globe } from 'lucide-react';
import { usePortfolioData } from '../../hooks/usePortfolioData';
import './ContactSection.css';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

const isEmailJsConfigured = Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);

const ContactSection = () => {
  const { profile } = usePortfolioData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toEmail = profile?.email || 'arif.hidayat@aigen-global.com';

    // If EmailJS keys are not configured, never fake a success message —
    // open the visitor's email client with the message pre-filled instead.
    if (!isEmailJsConfigured) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
      const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
      window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
      return;
    }

    Swal.fire({
      title: 'Sending...',
      text: 'Please wait while we deliver your message',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID as string,
        EMAILJS_TEMPLATE_ID as string,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: toEmail
        },
        { publicKey: EMAILJS_PUBLIC_KEY as string }
      );

      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: `Thanks, ${formData.name}. ${profile?.firstName || 'Arif'} will get back to you soon.`,
        confirmButtonColor: '#4f46e5',
        timer: 3000
      });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      Swal.fire({
        icon: 'error',
        title: 'Could not send your message',
        text: `Please try again, or email ${toEmail} directly.`,
        confirmButtonColor: '#4f46e5'
      });
    }
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
            <p className="contact-desc">Reach out for collaborations or questions.</p>
            
            <div className="info-list">
              <div className="info-item">
                <div className="info-icon-wrapper">
                  <Mail size={22} />
                </div>
                <div className="info-details">
                  <h4>Email</h4>
                  <p><a href={`mailto:${profile?.email}`}>{profile?.email || 'arif.hidayat@aigen-global.com'}</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper secondary">
                  <MapPin size={22} />
                </div>
                <div className="info-details">
                  <h4>Location</h4>
                  <p>{profile?.location || 'Jakarta, Indonesia (UTC+7)'}</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper tertiary">
                  <Globe size={22} />
                </div>
                <div className="info-details">
                  <h4>Availability</h4>
                  <p>Remote · B2B contractor or EOR</p>
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
