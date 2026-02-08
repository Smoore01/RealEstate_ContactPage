import React, { useState } from 'react';

export default function ContactForm() {
  const backgroundImage = "../../src/img/gdfz.png";

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    zipCode: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
   
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for contacting us! We will get back to you shortly.');
      setFormData({
        fullName: '',
        address: '',
        zipCode: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 pt-24 sm:pt-28 lg:pt-32 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-amber-900/40"></div> */}
      </div>

     

      {/* Contact Form Card */}
      <div className="relative w-full max-w-2xl">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20 transform transition-all duration-500 hover:scale-[1.01]">
          <div className="p-8 sm:p-12 lg:p-16">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-2xl sm:text-4xl mb-4 " style={{fontFamily: "'Playfair Display', serif"}}>
                Contact Us
              </h1>
              <p className="text-slate-600 text-lg" style={{fontFamily: "'Inter', sans-serif"}}>
                Fill in your details and we will contact you shortly.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Full Name */}
              <div className="group">
                <label 
                  htmlFor="fullName" 
                  className="block text-sm font-semibold text-slate-700 mb-2 transition-colors group-focus-within:text-amber-600"
                  style={{fontFamily: "'Inter', sans-serif"}}
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-all duration-300 text-lg"
                  style={{fontFamily: "'Inter', sans-serif"}}
                />
              </div>

              {/* Address and Zip Code */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="group">
                  <label 
                    htmlFor="address" 
                    className="block text-sm font-semibold text-slate-700 mb-2 transition-colors group-focus-within:text-amber-600"
                    style={{fontFamily: "'Inter', sans-serif"}}
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Oak Avenue"
                    required
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-all duration-300 text-lg"
                    style={{fontFamily: "'Inter', sans-serif"}}
                  />
                </div>

                <div className="group">
                  <label 
                    htmlFor="zipCode" 
                    className="block text-sm font-semibold text-slate-700 mb-2 transition-colors group-focus-within:text-amber-600"
                    style={{fontFamily: "'Inter', sans-serif"}}
                  >
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="90210"
                    required
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-all duration-300 text-lg"
                    style={{fontFamily: "'Inter', sans-serif"}}
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="group">
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-semibold text-slate-700 mb-2 transition-colors group-focus-within:text-amber-600"
                    style={{fontFamily: "'Inter', sans-serif"}}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.smith@email.com"
                    required
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-all duration-300 text-lg"
                    style={{fontFamily: "'Inter', sans-serif"}}
                  />
                </div>

                <div className="group">
                  <label 
                    htmlFor="phone" 
                    className="block text-sm font-semibold text-slate-700 mb-2 transition-colors group-focus-within:text-amber-600"
                    style={{fontFamily: "'Inter', sans-serif"}}
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    required
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-all duration-300 text-lg"
                    style={{fontFamily: "'Inter', sans-serif"}}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="group">
                <label 
                  htmlFor="message" 
                  className="block text-sm font-semibold text-slate-700 mb-2 transition-colors group-focus-within:text-amber-600"
                  style={{fontFamily: "'Inter', sans-serif"}}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a bit about your home or what you're looking for"
                  required
                  rows="4"
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-all duration-300 resize-none text-lg"
                  style={{fontFamily: "'Inter', sans-serif"}}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 bg-white border-2 border-slate-300 rounded-xl text-slate-700 font-semibold text-lg hover:bg-slate-50 hover:border-amber-500 hover:text-amber-600 focus:outline-none focus:ring-4 focus:ring-amber-500/20 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{fontFamily: "'Inter', sans-serif"}}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>

              {/* Privacy Note */}
              <p className="text-center text-slate-500 text-sm mt-6" style={{fontFamily: "'Inter', sans-serif"}}>
                We never share your data with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;600;700&display=swap');
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}