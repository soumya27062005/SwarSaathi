import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  MessageCircle, 
  Mic, 
  Briefcase, 
  Plane, 
  Coffee, 
  GraduationCap,
  ChevronRight,
  Check
} from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "Conversation Partner",
    description: "Practice real-world conversations with AI that adapts to your level and interests.",
    features: [
      "Natural, flowing conversations",
      "Context-aware responses",
      "Multiple conversation topics",
      "Real-time corrections",
    ],
    color: "bg-primary",
    link: "/practice",
  },
  {
    icon: Mic,
    title: "Pronunciation Feedback",
    description: "Get instant, detailed analysis of your pronunciation with word-by-word breakdown.",
    features: [
      "Phonetic accuracy scoring",
      "Word-level feedback",
      "Native comparison audio",
      "Progress tracking",
    ],
    color: "bg-secondary",
    link: "/pronunciation",
  },
  {
    icon: Briefcase,
    title: "Interview Practice",
    description: "Prepare for job interviews in any language with realistic scenarios and feedback.",
    features: [
      "Industry-specific vocabulary",
      "Common interview questions",
      "Professional tone coaching",
      "Confidence building",
    ],
    color: "bg-accent",
    link: "/practice",
  },
  {
    icon: Plane,
    title: "Travel Conversations",
    description: "Learn essential phrases and conversations for your next trip abroad.",
    features: [
      "Airport & hotel scenarios",
      "Restaurant ordering",
      "Asking for directions",
      "Emergency phrases",
    ],
    color: "bg-warning",
    link: "/practice",
  },
  {
    icon: Coffee,
    title: "Daily Talk Practice",
    description: "Master everyday conversations for social and casual situations.",
    features: [
      "Small talk mastery",
      "Cultural context tips",
      "Slang & idioms",
      "Regional variations",
    ],
    color: "bg-success",
    link: "/practice",
  },
  {
    icon: GraduationCap,
    title: "Academic Language",
    description: "Perfect your language skills for academic presentations and discussions.",
    features: [
      "Academic vocabulary",
      "Presentation skills",
      "Debate practice",
      "Formal writing support",
    ],
    color: "bg-destructive",
    link: "/practice",
  },
];

const Services = () => {
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
              Complete Language <span className="text-primary">Learning Tools</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to go from hesitant to fluent. Choose your focus area and start practicing today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wrapper">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-4 shadow-warm-sm`}>
                      <service.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-success shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={service.link}>
                      <Button variant="outline" className="w-full">
                        Start Practicing
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-wrapper text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
              Take our quick assessment to find the perfect learning path for your goals.
            </p>
            <Link to="/practice">
              <Button variant="default" size="xl">
                Take Free Assessment
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
