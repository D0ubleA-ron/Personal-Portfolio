'use client';

import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [captchaToken, setCaptchaToken] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!captchaToken) {
            alert('Please complete the CAPTCHA.');
            return;
        }

        const { name, email, subject, message } = formData;
        if (
            !name.trim() ||
            !email.trim() ||
            !email.includes('@') ||
            !subject.trim() ||
            !message.trim()
        ) {
            alert('Please fill out all fields correctly.');
            return;
        }

        setIsSubmitting(true);

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );
            alert('Message Sent!');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setCaptchaToken(null);
        } catch (error) {
            console.error('EmailJS Error:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-[#001d0b] px-4 py-10 sm:px-10 sm:py-16 md:px-20 md:py-20 flex justify-center">
    <div className="max-w-6xl w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-white">Get in touch</h1>
        <p className="text-sm text-white mb-10">
            If you want to contact me, fill out the following form and I will try my best to get back to you
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto text-left">
            <div className="grid sm:grid-cols-2 gap-6 text-white">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Name"
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded bg-transparent"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded bg-transparent"
                    required
                />
            </div>
            <input
                type="text"
                name="subject"
                value={formData.subject}
                placeholder="Subject"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded text-white bg-transparent"
                required
            />
            <textarea
                name="message"
                value={formData.message}
                placeholder="Message"
                rows="6"
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded text-white bg-transparent"
                required
            />
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={(token) => setCaptchaToken(token)}
                    onExpired={() => setCaptchaToken(null)}
                />
                <button
                    type="submit"
                    className={`px-8 py-4 border border-gray-300 rounded transition text-white whitespace-nowrap ${
                        isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'hover:bg-gray-600'
                    }`}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </div>
        </form>
    </div>
</section>
    );
}
