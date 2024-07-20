import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center max-w-screen-2xl mx-auto md:px-20 px-4 my-10">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold my-12">
          Get in <span className="text-pink-500">Touch with Us</span>
        </h2>
        <p className="text-sm md:text-xl mt-4">
          Have questions, suggestions, or just want to say hello? We'd love to hear from you!
        </p>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 space-y-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm md:text-xl font-medium">Name</label>
            <input
              type="text"
              id="name"
              className="input input-bordered w-full"
              placeholder="Your Name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm md:text-xl font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full"
              placeholder="Your Email"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm md:text-xl font-medium">Subject</label>
            <input
              type="text"
              id="subject"
              className="input input-bordered w-full"
              placeholder="Subject"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm md:text-xl font-medium">Message</label>
            <textarea
              id="message"
              className="textarea textarea-bordered w-full"
              rows="6"
              placeholder="Your Message"
            />
          </div>
          <button className="btn mt-6 btn-secondary">Send Message</button>
        </div>
        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-bold mb-6">Contact Information</h3>
          <p className="text-sm md:text-xl">
            You can also reach us at:
          </p>
          <p className="text-sm md:text-xl mt-4">
            <span className="font-medium">Email:</span> nileshrp239@gmail.com
          </p>
          <p className="text-sm md:text-xl mt-2">
            <span className="font-medium">Phone:</span> +919359541340
          </p>
          <p className="text-sm md:text-xl mt-2">
            <span className="font-medium">Address:</span> Remote location , Pune
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
