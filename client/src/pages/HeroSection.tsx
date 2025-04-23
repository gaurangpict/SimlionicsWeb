import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import backgroundImage from "../assets/images/battery-charging-interface.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen pt-40 pb-16 md:pt-40 md:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 z-0" style={{ top: '80px' }}>
        <img 
          src={backgroundImage} 
          alt="AI visualization of battery technology" 
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <Container className="relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            className="space-y-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Building Lithium Ion Battery Intelligence 
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Simlionics.ai delivers cutting-edge simulation technology to revolutionize battery development for electric vehicles and energy storage systems.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Button
                onClick={() => scrollToSection("contact")}
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
              >
                Request Demo
              </Button>
              <Button
                onClick={() => scrollToSection("features")}
                variant="outline"
                className="inline-flex justify-center items-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md shadow-sm text-black bg-white hover:bg-white hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 pt-8 border-t border-white/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="text-white font-medium">Trusted by industry leaders</p>
          <div className="mt-4 flex flex-wrap justify-center gap-8 opacity-70">
            <div className="h-10 flex items-center text-white font-bold text-xl">TESLA</div>
            <div className="h-10 flex items-center text-white font-bold text-xl">SAMSUNG SDI</div>
            <div className="h-10 flex items-center text-white font-bold text-xl">CATL</div>
            <div className="h-10 flex items-center text-white font-bold text-xl">LG ENERGY</div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;
