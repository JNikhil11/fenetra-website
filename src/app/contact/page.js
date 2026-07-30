'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function ContactPage() {
  const [quoteForm, setQuoteForm] = useState({
    name: '', company: '', email: '', phone: '', product: '', quantity: '', message: ''
  });
  const [generalForm, setGeneralForm] = useState({
    name: '', email: '', phone: '', message: ''
  });
  const [quoteStatus, setQuoteStatus] = useState(null);
  const [generalStatus, setGeneralStatus] = useState(null);

  const [isQuoteSubmitting, setIsQuoteSubmitting] = useState(false);
  const [isGeneralSubmitting, setIsGeneralSubmitting] = useState(false);

  const handleFormspreeSubmit = async (data, setStatus, setSubmitting, resetForm) => {
    setSubmitting(true);
    setStatus(null);
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'placeholder';
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        setStatus('success');
        resetForm();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
    setSubmitting(false);
    setTimeout(() => setStatus(null), 5000);
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    handleFormspreeSubmit(
      { formType: 'Quote Request', ...quoteForm },
      setQuoteStatus,
      setIsQuoteSubmitting,
      () => setQuoteForm({name: '', company: '', email: '', phone: '', product: '', quantity: '', message: ''})
    );
  };

  const handleGeneralSubmit = (e) => {
    e.preventDefault();
    handleFormspreeSubmit(
      { formType: 'General Enquiry', ...generalForm },
      setGeneralStatus,
      setIsGeneralSubmitting,
      () => setGeneralForm({name: '', email: '', phone: '', message: ''})
    );
  };

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p className="hero-subtitle">Request a quote, download our brochure, or reach out to our team.</p>
        </div>
      </div>

      <section className="contact-main bg-grey">
        <div className="container">
          <div className="contact-grid">
            
            {/* Left Column: Quote Form */}
            <div className="form-container">
              <h2>Request a Quotation</h2>
              <p className="form-desc">Fill out the details below and our sales team will get back to you with a competitive quote.</p>
              
              {quoteStatus === 'success' && (
                <div className="toast success">Your quote request has been sent successfully!</div>
              )}
              {quoteStatus === 'error' && (
                <div className="toast error" style={{background: '#ffebee', color: '#c62828', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem'}}>There was an error sending your request. Please try again or email us directly.</div>
              )}

              <form onSubmit={handleQuoteSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Name *</label>
                    <input type="text" required value={quoteForm.name} onChange={(e) => setQuoteForm({...quoteForm, name: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label>Company Name *</label>
                    <input type="text" required value={quoteForm.company} onChange={(e) => setQuoteForm({...quoteForm, company: e.target.value})} />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" required value={quoteForm.email} onChange={(e) => setQuoteForm({...quoteForm, email: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" required value={quoteForm.phone} onChange={(e) => setQuoteForm({...quoteForm, phone: e.target.value})} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Product Grade</label>
                    <select value={quoteForm.product} onChange={(e) => setQuoteForm({...quoteForm, product: e.target.value})}>
                      <option value="">Select a product...</option>
                      <option value="PP">Polypropylene (PP)</option>
                      <option value="ABS">ABS</option>
                      <option value="PC">Polycarbonate (PC)</option>
                      <option value="PPCP">PPCP</option>
                      <option value="RP-PPCP">RP-PPCP</option>
                      <option value="PP-B120MA">PP-B120MA</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Expected Quantity (MT)</label>
                    <input type="text" value={quoteForm.quantity} onChange={(e) => setQuoteForm({...quoteForm, quantity: e.target.value})} />
                  </div>
                </div>

                <div className="form-group">
                  <label>Additional Message / Specific Requirements</label>
                  <textarea rows="4" value={quoteForm.message} onChange={(e) => setQuoteForm({...quoteForm, message: e.target.value})}></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-block" disabled={isQuoteSubmitting}>
                  {isQuoteSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            </div>

            {/* Right Column: Contact Info */}
            <div className="info-container">
              <div className="info-card">
                <h3>Contact Information</h3>
                <div className="info-item">
                  <span className="icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cobalt)' }}><Phone size={24} strokeWidth={1.5} /></span>
                  <div>
                    <strong>Phone</strong>
                    <a href={`tel:${COMPANY_INFO.phone.primary.replace(/\s+/g, '')}`}>{COMPANY_INFO.phone.primary}</a>
                  </div>
                </div>
                <div className="info-item">
                  <span className="icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cobalt)' }}><Mail size={24} strokeWidth={1.5} /></span>
                  <div>
                    <strong>Email</strong>
                    <a href={`mailto:${COMPANY_INFO.emails.primary}`}>{COMPANY_INFO.emails.primary}</a>
                  </div>
                </div>
                <div className="info-item">
                  <span className="icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cobalt)' }}><Clock size={24} strokeWidth={1.5} /></span>
                  <div>
                    <strong>Business Hours</strong>
                    <span>Monday - Saturday<br/>9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="info-card addresses">
                <h3>Our Branches</h3>
                <div className="address-item">
                  <strong>Branch 1 (HQ)</strong>
                  <p>{COMPANY_INFO.addresses.headquarters}</p>
                </div>
                <div className="address-item">
                  <strong>Branch 2</strong>
                  <p>{COMPANY_INFO.addresses.branch}</p>
                </div>
                <Link href="/locations" className="text-link">View Maps &rarr;</Link>
              </div>

              <div className="brochure-card">
                <h3>Corporate Brochure</h3>
                <p>Download our complete product catalog and company profile.</p>
                <a href="/Fenetra-Industries-Brochure.pdf" download className="btn btn-outline btn-block" style={{ display: 'inline-block', textAlign: 'center' }}>Download PDF</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="general-enquiry bg-white">
        <div className="container">
          <div className="enquiry-content">
            <h2>General Enquiry</h2>
            <p>Have a question not related to a quotation? Use this form.</p>
            
            {generalStatus === 'success' && (
              <div className="toast success">Message sent successfully!</div>
            )}
            {generalStatus === 'error' && (
              <div className="toast error" style={{background: '#ffebee', color: '#c62828', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem'}}>There was an error sending your message. Please try again or email us directly.</div>
            )}

            <form onSubmit={handleGeneralSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" required value={generalForm.name} onChange={(e) => setGeneralForm({...generalForm, name: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" required value={generalForm.email} onChange={(e) => setGeneralForm({...generalForm, email: e.target.value})} />
                </div>
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" value={generalForm.phone} onChange={(e) => setGeneralForm({...generalForm, phone: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" required value={generalForm.message} onChange={(e) => setGeneralForm({...generalForm, message: e.target.value})}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" disabled={isGeneralSubmitting}>
                {isGeneralSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="maps-section bg-grey">
        <div className="maps-grid">
          <div className="map-container">
            <h3 style={{ marginBottom: '1rem', color: 'var(--navy)' }}>Headquarters (Branch 1)</h3>
            <div className="map-btn-container">
              <a href="https://maps.app.goo.gl/ut2J4rckmFNXMJ9b6" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={20} /> View HQ on Google Maps
              </a>
            </div>
          </div>
          <div className="map-container">
            <h3 style={{ marginBottom: '1rem', color: 'var(--navy)' }}>Warehouse (Branch 2)</h3>
            <div className="map-btn-container">
              <a href="https://maps.app.goo.gl/hBPH14qsYuFbr5ot9" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={20} /> View Branch 2 on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero {
          background-color: var(--navy);
          color: white;
          padding: 80px 0;
          text-align: center;
        }
        .page-hero h1 { font-size: 3rem; margin-bottom: 1rem; }
        .hero-subtitle { font-size: 1.25rem; color: var(--coolgrey); }
        
        .bg-grey { background-color: var(--offwhite); }
        .bg-white { background-color: #ffffff; }
        
        section { padding: 80px 0; }

        /* Grid Layout */
        .contact-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 50px;
        }

        /* Forms */
        .form-container, .enquiry-content {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }
        .enquiry-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .form-container h2, .enquiry-content h2 {
          color: var(--navy);
          font-size: 2rem;
          margin-bottom: 10px;
        }
        .form-desc {
          color: var(--graphite);
          margin-bottom: 30px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-row {
          display: flex;
          gap: 20px;
        }
        .form-group {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        label {
          font-weight: 600;
          color: var(--navy);
          font-size: 0.95rem;
        }
        input, select, textarea {
          padding: 12px 15px;
          border: 1px solid var(--coolgrey);
          border-radius: 8px;
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.3s;
        }
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: var(--cobalt);
        }
        .btn-block { width: 100%; }
        
        /* Toast */
        .toast {
          padding: 15px 20px;
          border-radius: 8px;
          margin-bottom: 20px;
          font-weight: 600;
        }
        .toast.success {
          background-color: #d1fae5;
          color: #065f46;
          border: 1px solid #10b981;
        }

        /* Info Cards */
        .info-container {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .info-card, .brochure-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }
        .info-card h3, .brochure-card h3 {
          color: var(--navy);
          font-size: 1.3rem;
          margin-bottom: 25px;
          border-bottom: 2px solid var(--offwhite);
          padding-bottom: 15px;
        }
        .info-item {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
        }
        .info-item:last-child { margin-bottom: 0; }
        .info-item .icon { font-size: 1.5rem; }
        .info-item strong {
          display: block;
          color: var(--navy);
          margin-bottom: 5px;
        }
        .info-item a, .info-item span {
          color: var(--graphite);
          text-decoration: none;
        }
        .info-item a:hover { color: var(--cobalt); }
        
        .address-item {
          margin-bottom: 20px;
        }
        .address-item strong {
          display: block;
          color: var(--navy);
          margin-bottom: 5px;
        }
        .address-item p {
          color: var(--graphite);
          line-height: 1.5;
          font-size: 0.95rem;
        }
        .text-link {
          color: var(--cobalt);
          font-weight: 600;
          text-decoration: none;
        }
        .brochure-card p {
          color: var(--graphite);
          margin-bottom: 20px;
          line-height: 1.5;
        }

        /* Maps Section */
        .maps-section { padding: 0; }
        .maps-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: 400px;
        }

        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr; }
          .form-row { flex-direction: column; gap: 20px; }
          .maps-grid { grid-template-columns: 1fr; height: 600px; }
        }
      `}</style>
    </>
  );
}
