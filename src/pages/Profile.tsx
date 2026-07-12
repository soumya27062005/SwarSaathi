import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  User, 
  Globe, 
  Target, 
  Award, 
  Calendar, 
  Clock,
  Edit,
  TrendingUp,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const userStats = {
    totalPractice: "24h 35m",
    conversations: 156,
    wordsLearned: 847,
    averageScore: 82,
    streak: 7,
    joinDate: "November 2024",
  };

  const languageProgress = [
    { language: "English", level: "Intermediate", progress: 65, flag: "🇬🇧" },
    { language: "Hindi", level: "Advanced", progress: 85, flag: "🇮🇳" },
    { language: "Spanish", level: "Beginner", progress: 25, flag: "🇪🇸" },
  ];

  const achievements = [
    { title: "7 Day Streak", icon: "🔥", unlocked: true },
    { title: "100 Conversations", icon: "💬", unlocked: true },
    { title: "Pronunciation Pro", icon: "🎤", unlocked: false },
    { title: "Multilingual", icon: "🌍", unlocked: true },
    { title: "Early Bird", icon: "🌅", unlocked: false },
    { title: "Night Owl", icon: "🦉", unlocked: true },
  ];

  return (
    <Layout>
      <section className="section-padding bg-muted min-h-[calc(100vh-80px)]">
        <div className="container-wrapper">
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-warm-lg">
                  <User className="w-12 h-12 text-primary-foreground" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-2xl font-bold text-foreground mb-1">Aarav Sharma</h1>
                  <p className="text-muted-foreground mb-3">aarav.sharma@email.com</p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      Joined {userStats.joinDate}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {userStats.totalPractice} practiced
                    </span>
                  </div>
                </div>
                <Button variant="outline">
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </Button>
              </div>
            </Card>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Stats Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-success" />
                    Your Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Conversations", value: userStats.conversations },
                      { label: "Words Learned", value: userStats.wordsLearned },
                      { label: "Avg. Score", value: `${userStats.averageScore}%` },
                      { label: "Current Streak", value: `${userStats.streak} days` },
                    ].map((stat) => (
                      <div key={stat.label} className="p-4 bg-muted rounded-xl text-center">
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Language Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-secondary" />
                    Language Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {languageProgress.map((lang) => (
                      <div key={lang.language} className="p-4 bg-muted rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{lang.flag}</span>
                            <span className="font-medium text-foreground">{lang.language}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{lang.level}</span>
                        </div>
                        <div className="h-2 rounded-full bg-card overflow-hidden">
                          <div
                            className="h-full rounded-full bg-secondary transition-all"
                            style={{ width: `${lang.progress}%` }}
                          />
                        </div>
                        <p className="text-right text-sm text-muted-foreground mt-1">
                          {lang.progress}% complete
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-warning" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3">
                    {achievements.map((achievement) => (
                      <div
                        key={achievement.title}
                        className={`p-3 rounded-xl text-center transition-all ${
                          achievement.unlocked
                            ? "bg-warning/20"
                            : "bg-muted opacity-50"
                        }`}
                      >
                        <span className="text-2xl block mb-1">{achievement.icon}</span>
                        <p className="text-xs font-medium text-foreground">{achievement.title}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-muted rounded-xl text-center">
                    <p className="text-sm text-muted-foreground">
                      <Star className="w-4 h-4 inline text-warning" /> 4 of 6 achievements unlocked
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <Card className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Continue Your Journey</h3>
                  <p className="text-muted-foreground">Pick up where you left off or try something new.</p>
                </div>
                <div className="flex gap-3">
                  <Link to="/practice">
                    <Button>Continue Practice</Button>
                  </Link>
                  <Link to="/dashboard">
                    <Button variant="secondary">View Dashboard</Button>
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

export default Profile;
