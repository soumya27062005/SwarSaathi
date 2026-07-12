import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mic, MicOff, PlayCircle, RefreshCw, Volume2, AlertCircle, CheckCircle } from "lucide-react";

interface WordFeedback {
  word: string;
  isCorrect: boolean;
  expected: string;
  actual: string;
}

const Pronunciation = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [hasResult, setHasResult] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedPhrase, setSelectedPhrase] = useState("Hello, my name is...");

  const phrases = [
    "Hello, my name is...",
    "How are you doing today?",
    "I would like to order food",
    "Thank you very much",
    "Nice to meet you",
    "Where is the nearest station?",
  ];

  const mockFeedback: WordFeedback[] = [
    { word: "Hello", isCorrect: true, expected: "həˈloʊ", actual: "həˈloʊ" },
    { word: "my", isCorrect: true, expected: "maɪ", actual: "maɪ" },
    { word: "name", isCorrect: false, expected: "neɪm", actual: "nem" },
    { word: "is", isCorrect: true, expected: "ɪz", actual: "ɪz" },
  ];

  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      setHasResult(false);
      // Simulate recording for 3 seconds
      setTimeout(() => {
        setIsRecording(false);
        setHasResult(true);
        setScore(Math.floor(Math.random() * 30) + 70);
      }, 3000);
    } else {
      setIsRecording(false);
    }
  };

  const getScoreColor = () => {
    if (score >= 90) return "bg-success";
    if (score >= 70) return "bg-warning";
    return "bg-destructive";
  };

  return (
    <Layout>
      <section className="section-padding bg-muted min-h-[calc(100vh-80px)]">
        <div className="container-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pronunciation Practice
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Speak the phrase and get instant feedback on your pronunciation accuracy.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Phrase Selection */}
            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-4">Select a Phrase</h3>
              <div className="space-y-2">
                {phrases.map((phrase) => (
                  <button
                    key={phrase}
                    onClick={() => {
                      setSelectedPhrase(phrase);
                      setHasResult(false);
                    }}
                    className={`w-full text-left p-3 rounded-xl transition-all ${
                      selectedPhrase === phrase
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    }`}
                  >
                    {phrase}
                  </button>
                ))}
              </div>
            </Card>

            {/* Recording Panel */}
            <Card className="p-6">
              <div className="text-center">
                <h3 className="font-bold text-foreground mb-2">Speak This Phrase</h3>
                <p className="text-2xl font-medium text-primary mb-8">"{selectedPhrase}"</p>

                <button className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground mb-8 mx-auto transition-colors">
                  <Volume2 className="w-5 h-5" />
                  <span className="text-sm">Listen to Native Pronunciation</span>
                </button>

                <motion.button
                  onClick={toggleRecording}
                  whileTap={{ scale: 0.95 }}
                  className={`w-28 h-28 rounded-full flex items-center justify-center mx-auto transition-all shadow-warm-lg ${
                    isRecording
                      ? "bg-destructive text-destructive-foreground animate-pulse"
                      : "bg-primary text-primary-foreground hover:shadow-warm-xl"
                  }`}
                >
                  {isRecording ? (
                    <MicOff className="w-12 h-12" />
                  ) : (
                    <Mic className="w-12 h-12" />
                  )}
                </motion.button>
                
                <p className="mt-4 text-muted-foreground">
                  {isRecording ? "Recording... Speak now" : "Tap to start recording"}
                </p>

                {hasResult && (
                  <Button variant="ghost" onClick={() => setHasResult(false)} className="mt-4">
                    <RefreshCw className="w-4 h-4" />
                    Try Again
                  </Button>
                )}
              </div>
            </Card>

            {/* Results Panel */}
            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-4">Your Results</h3>
              
              {!hasResult ? (
                <div className="text-center py-12 text-muted-foreground">
                  <PlayCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>Record your pronunciation to see results</p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {/* Score Meter */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">Accuracy Score</span>
                      <span className="text-2xl font-bold text-foreground">{score}%</span>
                    </div>
                    <div className="h-4 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${score}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className={`h-full rounded-full ${getScoreColor()}`}
                      />
                    </div>
                  </div>

                  {/* Word Breakdown */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground">Word-by-Word Breakdown</h4>
                    {mockFeedback.map((item, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-xl flex items-start gap-3 ${
                          item.isCorrect ? "bg-success/10" : "bg-destructive/10"
                        }`}
                      >
                        {item.isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-success shrink-0" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-destructive shrink-0" />
                        )}
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{item.word}</p>
                          {!item.isCorrect && (
                            <p className="text-sm text-muted-foreground mt-1">
                              Expected: <span className="text-foreground">{item.expected}</span>
                              <br />
                              You said: <span className="text-destructive">{item.actual}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tip */}
                  <div className="mt-6 p-4 bg-warning/10 rounded-xl">
                    <p className="text-sm text-foreground">
                      <strong>Tip:</strong> Focus on the vowel sound in "name" - it should be a long "ay" sound.
                    </p>
                  </div>
                </motion.div>
              )}
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pronunciation;
