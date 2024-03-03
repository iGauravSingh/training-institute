"use client"
import React, { useState } from 'react';
import formImage from './appoinment-img-1.jpg'
import Image from 'next/image';

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', { fullName, address, subject, message });
    setFullName('');
    setAddress('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="flex justify-center">
      <div className="w-2/5">
        {/* Image */}
        <Image
          src={formImage}
          alt="placeholder"
          className="w-full h-auto rounded-l-2xl"
        />
      </div>
      <div className="w-3/5 p-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex">
            <div className="w-1/2 mr-2">
              <label htmlFor="fullName" className="block mb-1">Full Name:</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="address" className="block mb-1">Address:</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block mb-1">Subject:</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border rounded px-2 py-1"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Write Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border rounded px-2 py-1"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;