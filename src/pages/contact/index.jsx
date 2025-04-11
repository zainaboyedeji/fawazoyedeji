import React, { useState } from "react";
import "./contact.scss";
import MobileHead from "../../components/mobile_head";

function Contact() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xanynojr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("Message sent successfully!");
        form.reset();
      } else {
        setFormStatus("There was a problem sending your message.");
      }
    } catch (error) {
      setFormStatus("Error sending message. Please try again later.");
    }
  };

  return (
    <div className="contact">
      <MobileHead />

      <div className="container mx-auto px-4">
        <p className="text-center">
          Use the form or email to enquire about rates and availability, or you
          can just email me to say hi.
        </p>
        <div className="flex flex-col md:flex-row mt-20">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="mb-5">
              <strong>Email:</strong> contactfawazoyedeji@gmail.com
            </p>
            <p className="mb-5">
              <strong>Location:</strong> Lagos, Nigeria.
            </p>
            <p>
              <strong>Phone:</strong> +234-906-5286612
            </p>
          </div>

          <div className="md:w-1/2">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-white hover:text-black focus:outline-none"
              >
                Send Message
              </button>
            </form>
            {formStatus && <p className="mt-4 text-center">{formStatus}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
