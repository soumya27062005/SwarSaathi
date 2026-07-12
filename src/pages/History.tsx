import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search, Calendar, MessageCircle, Mic, ChevronRight, Filter } from "lucide-react";

interface ConversationLog {
  id: number;
  date: string;
  type: "text" | "voice";
  topic: string;
  messages: number;
  score: number;
  language: string;
}

const History = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<"all" | "text" | "voice">("all");

  const conversations: ConversationLog[] = [
    { id: 1, date: "Today, 2:30 PM", type: "voice", topic: "Job Interview Practice", messages: 12, score: 85, language: "English" },
    { id: 2, date: "Today, 10:15 AM", type: "text", topic: "Daily Conversation", messages: 24, score: 78, language: "Hindi" },
    { id: 3, date: "Yesterday, 8:00 PM", type: "voice", topic: "Travel Scenarios", messages: 18, score: 82, language: "Spanish" },
    { id: 4, date: "Yesterday, 3:45 PM", type: "text", topic: "Restaurant Ordering", messages: 15, score: 90, language: "French" },
    { id: 5, date: "Dec 28, 6:30 PM", type: "voice", topic: "Business Meeting", messages: 20, score: 75, language: "English" },
    { id: 6, date: "Dec 27, 11:00 AM", type: "text", topic: "Casual Chat", messages: 32, score: 88, language: "Hindi" },
  ];

  const filteredConversations = conversations.filter((conv) => {
    const matchesSearch = conv.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.language.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === "all" || conv.type === filterType;
    return matchesSearch && matchesType;
  });

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
              Conversation History
            </h1>
            <p className="text-muted-foreground">
              Review your past practice sessions and track your improvement.
            </p>
          </motion.div>

          {/* Search & Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <Card className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by topic or language..."
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex gap-2">
                  <div className="flex bg-muted rounded-xl p-1">
                    {(["all", "text", "voice"] as const).map((type) => (
                      <button
                        key={type}
                        onClick={() => setFilterType(type)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all capitalize ${
                          filterType === type
                            ? "bg-card text-foreground shadow-warm-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {type === "text" && <MessageCircle className="w-4 h-4" />}
                        {type === "voice" && <Mic className="w-4 h-4" />}
                        {type === "all" && <Filter className="w-4 h-4" />}
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Conversations List */}
          <div className="space-y-4">
            {filteredConversations.map((conv, index) => (
              <motion.div
                key={conv.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Card className="p-4 hover:shadow-warm-lg transition-shadow cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-warm-sm ${
                      conv.type === "voice" ? "bg-secondary" : "bg-accent"
                    }`}>
                      {conv.type === "voice" ? (
                        <Mic className="w-6 h-6 text-secondary-foreground" />
                      ) : (
                        <MessageCircle className="w-6 h-6 text-accent-foreground" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground">{conv.topic}</h3>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {conv.date}
                        </span>
                        <span>{conv.messages} messages</span>
                        <span className="px-2 py-0.5 bg-muted rounded-full">{conv.language}</span>
                      </div>
                    </div>
                    
                    <div className="text-right hidden sm:block">
                      <div className="text-2xl font-bold text-foreground">{conv.score}%</div>
                      <div className="text-sm text-muted-foreground">Accuracy</div>
                    </div>
                    
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </Card>
              </motion.div>
            ))}

            {filteredConversations.length === 0 && (
              <Card className="p-12 text-center">
                <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="font-bold text-foreground mb-2">No conversations found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
              </Card>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default History;
