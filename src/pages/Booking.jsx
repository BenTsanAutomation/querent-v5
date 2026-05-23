import { useState } from 'react';
import { Calendar, Clock, Video, Mail, CheckCircle2 } from 'lucide-react';
import './Booking.css';

const Booking = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        interest: 'voice-agents',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
        }, 800);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="booking-page section">
            <div className="container">

                <div className="booking-layout">
                    <div className="booking-info animate-fade-in">
                        <h1 className="hero-title">Architect the future. <span className="text-gradient">Book a consultation.</span></h1>
                        <p className="hero-subtitle pt-2">
                            Let's map out your operations and custom design an AI implementation to handle the heavy lifting.
                        </p>

                        <div className="booking-details mt-4">
                            <div className="detail-item">
                                <Clock className="detail-icon" />
                                <div>
                                    <h4>45-Minute Intensive</h4>
                                    <p className="text-muted">Google Meet link with AI note-taker — up to 45 minutes.</p>
                                </div>
                            </div>
                            <div className="detail-item">
                                <Video className="detail-icon" />
                                <div>
                                    <h4>Private Video Link</h4>
                                    <p className="text-muted">Encrypted Google Meet, sent on confirmation.</p>
                                </div>
                            </div>
                            <div className="detail-item">
                                <Calendar className="detail-icon" />
                                <div>
                                    <h4>Flexible Scheduling</h4>
                                    <p className="text-muted">Pick a time that works for your team.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="booking-form-wrapper glass-panel animate-fade-in delay-200">
                        {submitted ? (
                            <div className="success-state text-center">
                                <CheckCircle2 size={64} className="success-icon mx-auto mb-4" />
                                <h2>Request Received!</h2>
                                <p className="text-muted mt-2 mb-6">
                                    Thank you, {formData.name}. We'll send a calendar invitation to {formData.email} shortly.
                                </p>
                                <button className="btn btn-outline" onClick={() => setSubmitted(false)}>
                                    Book Another Call
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="booking-form">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Work Email</label>
                                    <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Acme Corp" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="interest">Primary Interest</label>
                                    <select id="interest" name="interest" value={formData.interest} onChange={handleChange}>
                                        <option value="voice-agents">Deploy Voice Agents</option>
                                        <option value="workflow">Workflow Automation</option>
                                        <option value="agents">Custom Agents</option>
                                        <option value="consulting">General AI Consulting</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Brief Description</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="What would you like us to help with?"
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary w-full mt-4">
                                    Initiate Analysis
                                </button>
                            </form>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Booking;
