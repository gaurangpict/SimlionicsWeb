import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Battery, Clock, Activity, TrendingUp } from "lucide-react";

const predictions = [
  {
    title: "State of Charge (SOC)",
    description: "Real-time monitoring and prediction of battery charge level with 99.9% accuracy using advanced AI algorithms.",
    icon: <Battery className="h-6 w-6 text-blue-600" />,
    value: "99.9%",
    metric: "Accuracy",
    color: "bg-blue-100",
  },
  {
    title: "Remaining Useful Life (RUL)",
    description: "Predict battery lifespan and degradation patterns with machine learning models trained on millions of charge cycles.",
    icon: <Clock className="h-6 w-6 text-green-600" />,
    value: "8.5",
    metric: "Years",
    color: "bg-green-100",
  },
  {
    title: "State of Health (SOH)",
    description: "Comprehensive health monitoring system that tracks capacity fade, internal resistance, and thermal characteristics.",
    icon: <Activity className="h-6 w-6 text-amber-600" />,
    value: "95%",
    metric: "Health",
    color: "bg-amber-100",
  },
  {
    title: "Performance Optimization",
    description: "AI-driven recommendations for optimal charging patterns and usage conditions to maximize battery longevity.",
    icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
    value: "25%",
    metric: "Improvement",
    color: "bg-purple-100",
  }
];

const PredictionsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <Container>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Advanced Battery Predictions</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Our AI-powered platform provides real-time insights into battery performance, health, and longevity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {predictions.map((prediction, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`w-12 h-12 ${prediction.color} rounded-lg flex items-center justify-center mb-4`}>
                {prediction.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{prediction.title}</h3>
              <p className="mt-2 text-slate-600">
                {prediction.description}
              </p>
              <div className="mt-4 flex items-center">
                <span className="text-2xl font-bold text-slate-900">{prediction.value}</span>
                <span className="ml-2 text-slate-500">{prediction.metric}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-lg text-slate-600">
            Our prediction models are continuously learning from real-world data to provide increasingly accurate insights.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default PredictionsSection; 