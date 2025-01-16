import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [message,setMessage]=useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bn3p24u', 'template_11iqz85', form.current, {
        publicKey: '5F8Zb4CQcthxtsdk7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMessage(true)
          console.log('message sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );

  };

  return (
    <>
    {message===false?
    <div className="bg-black text-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <form className="space-y-4" ref={form} onSubmit={sendEmail}>
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Phone Number Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#87b2f4] hover:bg-[#91a4d1] text-black font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
      :
      <div className="bg-gray-100 text-center text-green-500 font-semibold text-lg ">
      <p>Your message has been sent successfully!</p>
      <img 
    src="/done.png" 
    alt="Web Development" 
    className="mx-auto  w-20w-16 md:w-32 lg:w-48" 
  />
    </div>
      }
   
   </>
  );
};

export default ContactUs;
