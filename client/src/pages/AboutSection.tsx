import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import aboutImage from "../assets/images/about-image.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="lg:flex lg:items-center lg:gap-16">
          <motion.div 
            className="lg:w-6/12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">About Simlionics.ai</h2>
            <p className="mt-4 text-lg text-slate-600">
              Founded with a mission to accelerate the world's transition to sustainable energy, Simlionics.ai is at the forefront of battery simulation technology. Our team combines expertise in electrochemistry, artificial intelligence, and high-performance computing to deliver groundbreaking solutions for battery manufacturers and researchers.
            </p>
            <p className="mt-4 text-lg text-slate-600">
              We believe that advanced simulation is the key to unlocking the next generation of energy storage solutions that will power electric vehicles, renewable energy systems, and consumer electronics.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-slate-900">Our Founder & CEO</h3>
              <div className="mt-4 md:flex md:items-center">
                <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-200 flex items-center justify-center text-slate-400">
                    <User className="h-12 w-12" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900">Dr. Rutooj Deshpande</h4>
                  <p className="text-primary-700">Founder & CEO</p>
                  <p className="mt-2 text-slate-600">
                    Dr. Deshpande is a seasoned battery scientist with over 16 years of experience in vehicle electrification and energy storage. He has led projects with top companies like Ford, GM, Rivian, Evonik, and Sterling and Wilson Pvt. Ltd.
                  </p>
                  <p className="mt-2 text-slate-600">
                    He holds a PhD in Chemical and Materials Engineering from the University of Kentucky and completed postdoctoral research at Lawrence Berkeley National Laboratory, focusing on lithium-ion batteries. With a passion for connecting cell physics to real-world applications, he has authored several publications and holds multiple patents in the field.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-10 lg:mt-0 lg:w-6/12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={aboutImage}
                alt="" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold">Our Vision</h3>
                <p className="mt-2 text-slate-100">
                  To enable a future where energy storage solutions are developed 10x faster, with significantly higher performance, safety, and sustainability.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-5 rounded-xl">
                <div className="text-3xl font-bold text-primary-700">25+</div>
                <p className="text-slate-700">Battery researchers and AI specialists</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-xl">
                <div className="text-3xl font-bold text-primary-700">40+</div>
                <p className="text-slate-700">Industry partners worldwide</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-xl">
                <div className="text-3xl font-bold text-primary-700">12</div>
                <p className="text-slate-700">Patented simulation technologies</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-xl">
                <div className="text-3xl font-bold text-primary-700">3x</div>
                <p className="text-slate-700">Faster battery design iterations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
