import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { batteryImages } from "@/assets/batteryImages";
import {
  LightbulbIcon,
  ZapIcon,
  ChartBarIcon,
  UsersIcon,
  Fingerprint,
  ShieldCheckIcon,
} from "lucide-react";

const features = [
  {
    title: "Advanced AI Modeling",
    description: "Our proprietary algorithms predict battery behavior with unprecedented accuracy, reducing reliance on physical prototypes.",
    icon: <LightbulbIcon className="h-6 w-6 text-primary-700" />,
    bgColor: "bg-primary-100",
  },
  {
    title: "Real-time Performance Analysis",
    description: "Monitor simulated battery performance in real-time, with detailed analytics on capacity, degradation, and thermal behavior.",
    icon: <ChartBarIcon className="h-6 w-6 text-green-600" />,
    bgColor: "bg-green-100",
  },
  {
    title: "Accelerated R&D Cycles",
    description: "Reduce development time by up to 70% with virtual testing environments that simulate years of battery usage in days.",
    icon: <ZapIcon className="h-6 w-6 text-amber-600" />,
    bgColor: "bg-amber-100",
  },
  {
    title: "Digital Twin Technology",
    description: "Create precise virtual replicas of physical batteries to predict performance and optimize designs before manufacturing.",
    icon: <Fingerprint className="h-6 w-6 text-purple-600" />,
    bgColor: "bg-purple-100",
  },
  {
    title: "Collaborative Platform",
    description: "Facilitate cross-functional teamwork with our cloud-based platform that enables real-time collaboration on battery design projects.",
    icon: <UsersIcon className="h-6 w-6 text-pink-600" />,
    bgColor: "bg-pink-100",
  },
  {
    title: "Enhanced Safety Prediction",
    description: "Identify potential safety issues earlier in the development cycle with advanced risk assessment and thermal runaway simulations.",
    icon: <ShieldCheckIcon className="h-6 w-6 text-cyan-600" />,
    bgColor: "bg-cyan-100",
  }
];

const FeaturesSection = () => {
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
    <section id="features" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-50 to-white"></div>
      
      <Container className="relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Powering Battery Innovation</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Our AI-driven simulation platform accelerates development cycles and optimizes performance for next-generation energy storage solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 p-8 md:p-12 lg:p-16 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:bg-slate-800">
            <div className="md:max-w-lg">
              <h2 className="text-3xl font-bold text-white transition-colors duration-300 hover:text-primary-400">Experience the Future of Battery Design</h2>
              <p className="mt-4 text-lg text-slate-300 transition-colors duration-300 hover:text-slate-100">
                Our simulation platform reduces development costs by up to 60% while improving battery performance by 25% on average.
              </p>
              <div className="mt-8">
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary-900 bg-white hover:bg-slate-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-primary-700 transition-all duration-300"
                >
                  Schedule a Demo
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="ml-2 -mr-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
