import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  MessageCircle, 
  Mic, 
  Globe, 
  Sparkles, 
  Users, 
  TrendingUp,
  PlayCircle,
  ChevronRight,
  Star,
  Zap
} from "lucide-react";
import Layout from "@/components/layout/Layout";

const languages = [
  { name: "Hindi", flag: "🇮🇳", code: "hi" },
  { name: "English", flag: "🇬🇧", code: "en" },
  { name: "Spanish", flag: "🇪🇸", code: "es" },
  { name: "French", flag: "🇫🇷", code: "fr" },
  { name: "German", flag: "🇩🇪", code: "de" },
  { name: "Marathi", flag: "🇮🇳", code: "mr" },
];

const features = [
  {
    icon: MessageCircle,
    title: "Conversation Partner",
    description: "Practice real conversations with AI that adapts to your level",
    color: "bg-primary",
  },
  {
    icon: Mic,
    title: "Pronunciation Feedback",
    description: "Get instant, detailed feedback on how you speak",
    color: "bg-secondary",
  },
  {
    icon: Globe,
    title: "Scenario Practice",
    description: "Interview prep, travel conversations, daily talk practice",
    color: "bg-accent",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "See your improvement with detailed analytics",
    color: "bg-success",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    text: "Swar Saathi helped me ace my English interview at a top MNC!",
    rating: 5,
  },
  {
    name: "Rahul Kumar",
    role: "College Student",
    text: "Finally confident speaking Hindi with proper pronunciation.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Business Owner",
    text: "My French has improved dramatically in just 3 months.",
    rating: 5,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary rounded-full" />
          <div className="absolute top-40 right-1/4 w-24 h-24 bg-accent rounded-full" />
        </div>
        
        <div className="container-wrapper section-padding relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-warm-sm mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">AI-Powered Learning</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
                Dil se bolo,<br />
                <span className="text-primary">Sahi se seekho.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                Your AI conversation partner that helps you speak any language with confidence. Practice speaking, perfect your pronunciation, and unlock fluency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/practice">
                  <Button variant="hero" className="w-full sm:w-auto">
                    <PlayCircle className="w-5 h-5" />
                    Start Speaking Now
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="hero-outline" className="w-full sm:w-auto">
                    Learn More
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-primary border-2 border-card flex items-center justify-center text-primary-foreground font-bold text-sm"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="font-bold text-foreground">50,000+</p>
                  <p className="text-sm text-muted-foreground">Active Learners</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Card className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Choose Your Language</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      to="/practice"
                      className="group"
                    >
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-pointer group-hover:shadow-warm-md">
                        <span className="text-2xl">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-muted-foreground">
                  <Zap className="w-4 h-4 text-warning" />
                  <span className="text-sm">Free to start • No credit card required</span>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Speak Fluently
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed to make language learning natural, engaging, and effective.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover:-translate-y-1">
                  <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-4 shadow-warm-sm`}>
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-muted">
        <div className="container-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Swar Saathi Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to speaking confidently
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Choose Your Goal", desc: "Interview prep, travel, daily conversation, or casual learning" },
              { step: "02", title: "Practice Speaking", desc: "Chat with AI that understands context and responds naturally" },
              { step: "03", title: "Get Better Daily", desc: "Track progress, fix mistakes, and celebrate improvements" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-6xl font-extrabold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 right-0 translate-x-1/2">
                    <ChevronRight className="w-8 h-8 text-border" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Loved by Learners Everywhere
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands who've transformed their speaking skills
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-wrapper text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Speaking?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join 50,000+ learners who are speaking with confidence. Your fluency journey starts here.
            </p>
            <Link to="/practice">
              <Button variant="secondary" size="xl">
                <Mic className="w-5 h-5" />
                Start Free Practice
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
