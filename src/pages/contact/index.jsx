import React, { useEffect } from "react";
import "./contact.scss";
import MobileHead from "../../components/mobile_head";
import Footer from "../../components/footer";

function Contact() {
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", true);
    return () => {
      document.body.classList.toggle("overflow-hidden", false);
    };
  }, []);
  return (
    <>
      <div className="contact">
        <MobileHead />

        <div className="container mx-auto px-4">
          <p className="text-center">
            Use the form or email to enquire about rates and availability, or
            you can just email me to say hi.
          </p>
          <div className="flex flex-col md:flex-row mt-20">
            {/* Left side: Contact details */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="mb-5">
                <strong>Email:</strong> contactfawazoyedeji@gmail.com
              </p>
              <p className="mb-5">
                <strong>Location:</strong> Lagos,Nigeria.
              </p>
              <p>
                <strong>Phone:</strong> +234-90-93173219.
              </p>
            </div>

            {/* Right side: Form */}
            <div className="md:w-1/2">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded-md hover:bg-white hover:text-black ho focus:outline-none"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="contactFooter">
        <Footer />
      </div>
    </>
  );
}

export default Contact;
