import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Flame, 
  TrendingUp, 
  Target, 
  Clock, 
  Award,
  Calendar,
  AlertCircle,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const streakDays = [true, true, true, false, true, true, true];
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const commonMistakes = [
    { word: "pronunciation", issue: "Missing syllable", frequency: 5 },
    { word: "schedule", issue: "Wrong vowel sound", frequency: 4 },
    { word: "comfortable", issue: "Extra syllable", frequency: 3 },
    { word: "Wednesday", issue: "Silent letter", frequency: 3 },
  ];

  const recentProgress = [
    { date: "Today", score: 85, sessions: 2 },
    { date: "Yesterday", score: 78, sessions: 3 },
    { date: "Dec 28", score: 82, sessions: 1 },
    { date: "Dec 27", score: 75, sessions: 2 },
    { date: "Dec 26", score: 71, sessions: 1 },
  ];

  return (
    <Layout>
      <section className="section-padding bg-muted min-h-[calc(100vh-80px)]">
        <div className="container-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Your Learning Dashboard
            </h1>
            <p className="text-muted-foreground">
              Track your progress and stay motivated on your language journey.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Flame, label: "Day Streak", value: "7", color: "bg-primary" },
              { icon: TrendingUp, label: "Accuracy", value: "82%", color: "bg-success" },
              { icon: Clock, label: "Practice Time", value: "45m", color: "bg-secondary" },
              { icon: Award, label: "Words Mastered", value: "234", color: "bg-warning" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center shadow-warm-sm`}>
                      <stat.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Streak Widget */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Weekly Streak
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between gap-2">
                    {weekDays.map((day, index) => (
                      <div key={day} className="flex flex-col items-center gap-2">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                            streakDays[index]
                              ? "bg-primary text-primary-foreground shadow-warm-sm"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {streakDays[index] ? (
                            <Flame className="w-5 h-5" />
                          ) : (
                            <span className="text-xs">—</span>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">{day}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-primary/10 rounded-xl text-center">
                    <p className="text-sm text-foreground">
                      🔥 <strong>7 day streak!</strong> You're on fire! Keep it up!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Progress Chart Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-success" />
                    Improvement Trend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentProgress.map((day, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground w-20">{day.date}</span>
                        <div className="flex-1">
                          <div className="h-3 rounded-full bg-muted overflow-hidden">
                            <div
                              className="h-full rounded-full bg-success transition-all"
                              style={{ width: `${day.score}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-medium text-foreground w-12">{day.score}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Common Mistakes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-warning" />
                    Common Mistakes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {commonMistakes.map((mistake, index) => (
                      <div
                        key={index}
                        className="p-3 bg-muted rounded-xl flex items-center justify-between"
                      >
                        <div>
                          <p className="font-medium text-foreground">{mistake.word}</p>
                          <p className="text-sm text-muted-foreground">{mistake.issue}</p>
                        </div>
                        <div className="px-3 py-1 bg-warning/20 text-warning-foreground rounded-full text-sm font-medium">
                          {mistake.frequency}x
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link to="/pronunciation" className="block mt-4">
                    <Button variant="outline" className="w-full">
                      Practice These Words
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Card className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Ready for Today's Practice?</h3>
                  <p className="text-muted-foreground">You're just 15 minutes away from improving!</p>
                </div>
                <div className="flex gap-3">
                  <Link to="/practice">
                    <Button>Start Conversation</Button>
                  </Link>
                  <Link to="/pronunciation">
                    <Button variant="secondary">Pronunciation Test</Button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
