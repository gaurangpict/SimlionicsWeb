import { Container } from "@/components/ui/container";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0 10 L 40 10 M 10 0 L 10 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Container className="relative">
        <div className="lg:flex lg:items-center lg:gap-16">
          <motion.div 
            className="lg:w-5/12 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
            <p className="mt-4 text-lg text-slate-300">
              Ready to revolutionize your battery development process? Contact us to learn how Simlionics.ai can help you achieve breakthrough performance and faster time-to-market.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-400" />
                </div>
                <div className="ml-3 text-slate-300">
                  <p>simlionics@gmail.com</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary-400" />
                </div>
                <div className="ml-3 text-slate-300">
                  <p>+91 96xxxxxxxx</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-400" />
                </div>
                <div className="ml-3 text-slate-300">
                  <p>Hinjewadi<br />Pune<br />India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-300 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-300 hover:text-white transition-colors" aria-label="Twitter">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-300 hover:text-white transition-colors" aria-label="GitHub">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-7/12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white text-slate-800 rounded-xl p-6 md:p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
