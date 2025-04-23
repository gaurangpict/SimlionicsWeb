import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ChevronUp, BarChart3, DollarSign, Zap } from "lucide-react";
import battery2 from "../assets/battery2.svg";
import battery3 from "../assets/battery3.svg";

const TechShowcaseSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative">
      <Container>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Technology</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Discover how our AI-powered simulations are transforming battery development for electric vehicles and renewable energy storage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={battery2} 
              alt="Electric vehicle battery pack" 
              className="w-full h-72 md:h-96 object-contain"
            />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-slate-900">Electric Vehicle Battery Optimization</h3>
              <p className="mt-2 text-slate-600">
                Our simulations help EV manufacturers extend range, improve charging speed, and enhance overall battery longevity through advanced digital modeling.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={battery3} 
              alt="Renewable energy storage system" 
              className="w-full h-72 md:h-96 object-contain"
            />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-slate-900">SOH and SOC Estimation for Battery Management Systems</h3>
              <p className="mt-2 text-slate-600">
                Simlionics.ai provides accurate SOH and SOC estimation for battery management systems, enabling more efficient battery usage and longer battery life.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
              <ChevronUp className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">70% Faster Development</h3>
            <p className="mt-2 text-slate-600">
              Our customers report reducing battery development cycles from years to months with our simulation platform.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
              <DollarSign className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">60% Cost Reduction</h3>
            <p className="mt-2 text-slate-600">
              Minimize physical prototyping costs and optimize materials usage with our AI-powered predictive models.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">25% Performance Gain</h3>
            <p className="mt-2 text-slate-600">
              Achieve significant improvements in energy density, charging speed, and cycle life through simulation-guided optimization.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default TechShowcaseSection;
