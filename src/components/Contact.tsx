import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-accent" />
              <div>
                <h3 className="font-serif text-xl mb-1">Phone</h3>
                <p>(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-accent" />
              <div>
                <h3 className="font-serif text-xl mb-1">Email</h3>
                <p>contact@lawfirm.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-accent" />
              <div>
                <h3 className="font-serif text-xl mb-1">Address</h3>
                <p>123 Legal Street, Suite 100<br />City, State 12345</p>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-md text-gray-900"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md text-gray-900"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-md text-gray-900"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-accent hover:bg-accent-light text-white font-bold py-3 px-8 rounded-md transition-colors w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;