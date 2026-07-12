import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mic, 
  MicOff, 
  Send, 
  MessageCircle, 
  Volume2,
  RotateCcw,
  Settings,
  Sparkles
} from "lucide-react";

interface Message {
  id: number;
  type: "user" | "ai";
  text: string;
  timestamp: Date;
}

const Practice = () => {
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "ai",
      text: "Namaste! I'm your Swar Saathi. What would you like to practice today? We can talk about your interests, prepare for an interview, or just have a casual conversation!",
      timestamp: new Date(),
    },
  ]);

  const sendMessage = () => {
    if (!inputText.trim()) return;
    
    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      text: inputText,
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInputText("");
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "That's a great point! Can you tell me more about that?",
        "Interesting! Your pronunciation was clear. Let's continue...",
        "Bahut accha! You're improving. Try saying it one more time.",
        "Perfect! Now let's try a slightly more complex sentence.",
      ];
      
      const aiMessage: Message = {
        id: messages.length + 2,
        type: "ai",
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <Layout>
      <section className="min-h-[calc(100vh-80px)] bg-muted py-6">
        <div className="container-wrapper h-full">
          <div className="grid lg:grid-cols-4 gap-6 h-full">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-4">
              <Card className="p-4">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Practice Settings
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">Language</label>
                    <select className="w-full p-3 rounded-xl border border-border bg-card text-foreground">
                      <option>English</option>
                      <option>Hindi</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">Scenario</label>
                    <select className="w-full p-3 rounded-xl border border-border bg-card text-foreground">
                      <option>Casual Chat</option>
                      <option>Job Interview</option>
                      <option>Travel</option>
                      <option>Restaurant</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">Difficulty</label>
                    <select className="w-full p-3 rounded-xl border border-border bg-card text-foreground">
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <h3 className="font-bold text-foreground mb-3">Quick Tips</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                    Speak clearly and at a natural pace
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                    Don't worry about mistakes - that's how you learn!
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                    Use the voice mode for pronunciation practice
                  </li>
                </ul>
              </Card>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-3 flex flex-col">
              {/* Mode Toggle */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex bg-card rounded-xl p-1 border border-border">
                  <button
                    onClick={() => setIsVoiceMode(false)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      !isVoiceMode ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Text Chat
                  </button>
                  <button
                    onClick={() => setIsVoiceMode(true)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      isVoiceMode ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Mic className="w-4 h-4" />
                    Voice Chat
                  </button>
                </div>
                
                <Button variant="ghost" size="sm">
                  <RotateCcw className="w-4 h-4" />
                  New Conversation
                </Button>
              </div>

              {/* Messages */}
              <Card className="flex-1 p-4 overflow-hidden flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] p-4 rounded-2xl ${
                            message.type === "user"
                              ? "bg-primary text-primary-foreground rounded-br-sm"
                              : "bg-muted text-foreground rounded-bl-sm"
                          }`}
                        >
                          <p>{message.text}</p>
                          {message.type === "ai" && (
                            <button className="mt-2 text-muted-foreground hover:text-foreground transition-colors">
                              <Volume2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Input Area */}
                {isVoiceMode ? (
                  <div className="flex flex-col items-center py-8">
                    <motion.button
                      onClick={toggleRecording}
                      whileTap={{ scale: 0.95 }}
                      className={`w-24 h-24 rounded-full flex items-center justify-center transition-all shadow-warm-lg ${
                        isRecording
                          ? "bg-destructive text-destructive-foreground animate-pulse"
                          : "bg-primary text-primary-foreground hover:shadow-warm-xl"
                      }`}
                    >
                      {isRecording ? <MicOff className="w-10 h-10" /> : <Mic className="w-10 h-10" />}
                    </motion.button>
                    <p className="mt-4 text-muted-foreground">
                      {isRecording ? "Listening... Tap to stop" : "Tap to speak"}
                    </p>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                    <Button onClick={sendMessage} disabled={!inputText.trim()}>
                      <Send className="w-5 h-5" />
                    </Button>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Practice;
