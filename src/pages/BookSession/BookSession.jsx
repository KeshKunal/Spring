import React, { useState } from 'react';

function BookSession() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    concernType: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const concernTypes = [
    'Anxiety & Stress',
    'Depression',
    'Relationship Issues',
    'Work-Life Balance',
    'Self-Esteem',
    'Grief & Loss',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        concernType: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FBF4EE] to-[#E8D9CA] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-betofin text-[#372E2C] mb-4">Book a Session</h1>
          <p className="text-xl text-gray-700">Connect with our professional therapists</p>
          <div className="mt-4 h-1 w-32 bg-[#4FD1C5] mx-auto rounded-full"></div>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mb-8 p-6 bg-green-100 border-2 border-green-500 rounded-2xl text-center animate-fade-in">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="text-2xl font-bold text-green-700 mb-2">Request Submitted!</h3>
            <p className="text-green-600">Our team will contact you within 24 hours to confirm your session.</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#4FD1C5] transition"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#4FD1C5] transition"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#4FD1C5] transition"
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Concern Type */}
            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="concernType">
                Type of Concern <span className="text-red-500">*</span>
              </label>
              <select
                id="concernType"
                name="concernType"
                value={formData.concernType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#4FD1C5] transition"
              >
                <option value="">Select a concern</option>
                {concernTypes.map((concern) => (
                  <option key={concern} value={concern}>{concern}</option>
                ))}
              </select>
            </div>

            {/* Preferred Date */}
            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="preferredDate">
                Preferred Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#4FD1C5] transition"
              />
            </div>

            {/* Preferred Time */}
            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="preferredTime">
                Preferred Time <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#4FD1C5] transition"
              />
            </div>
          </div>

          {/* Message */}
          <div className="form-group mt-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#4FD1C5] transition resize-none"
              placeholder="Tell us more about what you'd like to discuss in the session..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#4FD1C5] to-[#3ab5a3] text-white font-bold text-lg px-12 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Book Your Session
            </button>
          </div>

          {/* Privacy Note */}
          <p className="text-sm text-gray-500 text-center mt-6">
            🔒 Your information is confidential and will only be used to schedule your session.
          </p>
        </form>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl mb-3">📅</div>
            <h3 className="font-bold text-lg mb-2">Flexible Scheduling</h3>
            <p className="text-gray-600 text-sm">Choose a time that works best for you</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="font-bold text-lg mb-2">100% Confidential</h3>
            <p className="text-gray-600 text-sm">Your privacy is our top priority</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl mb-3">👨‍⚕️</div>
            <h3 className="font-bold text-lg mb-2">Licensed Professionals</h3>
            <p className="text-gray-600 text-sm">Certified and experienced therapists</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookSession;
