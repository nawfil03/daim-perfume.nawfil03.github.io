import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct mailto link
    const mailtoLink = `mailto:daimstory@gmail.com?subject=${encodeURIComponent(
      formData.subject ? `DAIM Inquiry: ${formData.subject}` : "DAIM Inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    toast({
      title: "Opening Email Client",
      description: "Please send the pre-filled email to complete your inquiry.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | DAIM Perfumes</title>
        <meta name="description" content="Get in touch with DAIM. We'd love to hear from you about our luxury fragrances, collaborations, or any questions you may have." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between h-20 lg:h-24">
              <Link to="/" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft size={20} />
                <span className="text-sm tracking-[0.15em] uppercase">Back to Home</span>
              </Link>
              <Link to="/" className="flex flex-col items-center">
                <span className="font-display text-2xl tracking-[0.3em] text-foreground font-medium">DAIM</span>
                <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">Wear Your Story</span>
              </Link>
              <div className="w-32" />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 animate-fade-in">Get In Touch</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-6 animate-fade-in">
              Contact Us
            </h1>
            <div className="w-20 h-px bg-primary mx-auto mb-6 animate-fade-in" />
            <p className="text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed animate-fade-in">
              We'd love to hear from you. Whether you have a question about our fragrances,
              need assistance, or want to share your experience—we're here to help.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-24 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <h2 className="font-display text-2xl lg:text-3xl text-foreground tracking-wide mb-8">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border border-border/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border border-border/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border border-border/50 px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-transparent border border-border/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase font-medium hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="order-1 lg:order-2">
                <h2 className="font-display text-2xl lg:text-3xl text-foreground tracking-wide mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm tracking-[0.15em] uppercase text-foreground mb-2">Visit Our Store</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        Coming Soon in India & UAE
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm tracking-[0.15em] uppercase text-foreground mb-2">Call Us</h3>
                      <p className="text-muted-foreground font-light">+91 88257 36693</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm tracking-[0.15em] uppercase text-foreground mb-2">Email Us</h3>
                      <p className="text-muted-foreground font-light">daimstory@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm tracking-[0.15em] uppercase text-foreground mb-2">Business Hours</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        Monday - Saturday: 10:00 AM - 9:00 PM<br />
                        Sunday: 12:00 PM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="mt-12 pt-12 border-t border-border/30">
                  <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">Follow Us</p>
                  <div className="flex gap-4">
                    {["Instagram", "Facebook", "Twitter"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors font-light"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/30 py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <p className="text-xs text-muted-foreground tracking-wider">
              © 2024 DAIM. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;
