import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Target, Heart, Users, Globe, Lightbulb, Award } from "lucide-react";

const About = () => {
  const stats = [
    { value: "50K+", label: "Active Learners" },
    { value: "10+", label: "Languages" },
    { value: "1M+", label: "Conversations" },
    { value: "95%", label: "Success Rate" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Languages",
      description: "We believe everyone deserves the confidence to express themselves in any language.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Cutting-edge AI technology that adapts to how you learn best.",
    },
    {
      icon: Users,
      title: "Inclusive Learning",
      description: "Designed for students, professionals, and curious minds across India and beyond.",
    },
    {
      icon: Award,
      title: "Excellence Always",
      description: "We measure our success by your fluency and confidence gains.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-muted">
        <div className="container-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              Making Language Learning{" "}
              <span className="text-primary">Personal</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Swar Saathi was born from a simple observation: millions of people want to speak new languages 
              but lack a patient, always-available practice partner. We built the solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container-wrapper">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-extrabold text-primary mb-1">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-wrapper">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-warm-md">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize language learning by providing an AI-powered conversation partner that's 
                  accessible, affordable, and available 24/7. We want every Indian student and professional 
                  to speak with confidence on the global stage.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-8">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 shadow-warm-md">
                  <Globe className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A world where language barriers don't limit opportunities. We envision millions of 
                  learners from India and around the globe using Swar Saathi to unlock their potential 
                  and connect across cultures.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem We Solve */}
      <section className="section-padding bg-muted">
        <div className="container-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Problem We Solve
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Fear of Speaking",
                problem: "Many learners understand a language but freeze when they need to speak.",
                solution: "Safe, judgment-free practice with AI",
              },
              {
                title: "Lack of Practice Partners",
                problem: "Finding native speakers for practice is expensive and inconvenient.",
                solution: "24/7 availability, infinite patience",
              },
              {
                title: "Generic Learning",
                problem: "One-size-fits-all courses don't address individual weaknesses.",
                solution: "Personalized feedback on YOUR pronunciation",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-destructive mb-4 text-sm">{item.problem}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-success font-medium">✓ {item.solution}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-warm-sm">
                  <value.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
