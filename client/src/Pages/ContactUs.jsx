import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex h-screen w-screen items-center overflow-hidden px-2">
      <div className="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl mx-auto">
        <div className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-blue-600 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"></div>
        <div className="mx-auto mb-2 space-y-3">
          <h1 className="text-center text-3xl font-bold text-gray-700">Contact Us</h1>
          <p className="text-gray-500">Get in touch with us</p>
        </div>

        <form>
          <div className="mb-4">
            <label htmlFor="full_name" className="block mb-2 font-bold text-gray-700">Full Name</label>
            <input type="text" id="full_name" name="full_name" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-bold text-gray-700">Message</label>
            <textarea id="message" name="message" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" rows="5" required></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
