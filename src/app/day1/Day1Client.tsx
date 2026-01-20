'use client';

import { useState } from 'react';
import { day1Data } from '../../data/day1';
import { motion, AnimatePresence } from 'framer-motion';
import { checkAnswer } from '../../utils/checkAnswer';

type Mode = 'learn' | 'test';

export default function Day1Client() {
    const [mode, setMode] = useState<Mode>('learn');
    const [activeTab, setActiveTab] = useState<'greetings' | 'sein' | 'alphabets' | 'phrases'>('greetings');

    return (
        <div className="page-container">
            {/* Header */}
            <header className="header-row">
                <h1 className="hero-title gradient-text" style={{ fontSize: '2.5rem', margin: 0 }}>Day 1: Basics</h1>

                <div className="mode-toggle">
                    <button
                        onClick={() => setMode('learn')}
                        className={`px-6 py-2 rounded-full font-semibold transition-all ${mode === 'learn' ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                        style={{
                            backgroundColor: mode === 'learn' ? 'var(--primary)' : 'transparent',
                            color: mode === 'learn' ? 'white' : '#9ca3af',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '9999px',
                            border: 'none',
                            fontWeight: 600
                        }}
                    >
                        Learn
                    </button>
                    <button
                        onClick={() => setMode('test')}
                        className={`px-6 py-2 rounded-full font-semibold transition-all ${mode === 'test' ? 'bg-secondary text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                        style={{
                            backgroundColor: mode === 'test' ? 'var(--secondary)' : 'transparent',
                            color: mode === 'test' ? 'white' : '#9ca3af',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '9999px',
                            border: 'none',
                            fontWeight: 600
                        }}
                    >
                        Practice
                    </button>
                </div>
            </header>

            <div style={{ minHeight: '60vh' }}>
                <AnimatePresence mode="wait">
                    {mode === 'learn' ? (
                        <motion.div
                            key="learn"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <LearnView activeTab={activeTab} setActiveTab={setActiveTab} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="test"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <TestView />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

function LearnView({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: any) => void }) {
    const tabs = ['greetings', 'sein', 'alphabets', 'phrases'];

    return (
        <div>
            {/* Tabs */}
            <div className="tabs-container">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {/* Content Grid */}
            <div className="content-grid">
                {/* @ts-ignore */}
                {day1Data[activeTab]?.map((item: any, idx: number) => (
                    <div key={idx} className="glass-card vocab-card">
                        {activeTab === 'alphabets' ? (
                            <div className="alphabet-card">
                                <div className="alphabet-letter gradient-text">{item.letter}</div>
                                <div className="alphabet-pron">{item.pronunciation}</div>
                            </div>
                        ) : (
                            <>
                                <div className="vocab-german">{item.german}</div>
                                <div className="vocab-english">{item.english}</div>
                                {item.notes && (
                                    <div className="vocab-note">
                                        {item.notes}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

function TestView() {
    const [questions, setQuestions] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [input, setInput] = useState('');
    const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    // Initialize questions on mount
    if (questions.length === 0 && !isFinished) {
        const allQuestions = [
            ...day1Data.greetings.map(i => ({ q: i.english, a: i.german, type: 'Greeting' })),
            ...day1Data.sein.map(i => ({ q: i.english, a: i.german, type: 'Verb' })),
            ...day1Data.phrases.map(i => ({ q: i.english, a: i.german, type: 'Phrase' })),
        ].sort(() => Math.random() - 0.5); // Shuffle
        setQuestions(allQuestions);
    }

    const handleCheck = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const currentQ = questions[currentIndex];
        const result = checkAnswer(input, currentQ.a);

        if (result.isCorrect) {
            setFeedback({ type: 'success', message: 'Correct! ' + currentQ.a });
            setScore(s => s + 1);
        } else {
            setFeedback({ type: 'error', message: `Incorrect. The answer is: ${currentQ.a}` });
        }
    };

    const handleNext = () => {
        setFeedback(null);
        setInput('');
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setIsFinished(true);
        }
    };

    if (isFinished) {
        return (
            <div className="glass-card test-card-content animate-fade-in-up" style={{ maxWidth: '30rem', margin: '0 auto', textAlign: 'center' }}>
                <h2 className="hero-title gradient-text" style={{ fontSize: '2rem' }}>Session Complete!</h2>
                <div style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '2rem' }}>
                    {Math.round((score / questions.length) * 100)}%
                </div>
                <p className="module-desc" style={{ marginBottom: '2rem' }}>
                    You got {score} out of {questions.length} correct.
                </p>
                <button
                    onClick={() => {
                        setIsFinished(false);
                        setQuestions([]);
                        setCurrentIndex(0);
                        setScore(0);
                        setFeedback(null);
                    }}
                    className="btn-primary w-full"
                >
                    Try Again
                </button>
            </div>
        );
    }

    if (questions.length === 0) return <div>Loading...</div>;

    const currentQ = questions[currentIndex];

    return (
        <div className="test-container">
            {/* Progress Bar */}
            <div className="progress-info">
                <span>Question {currentIndex + 1} of {questions.length}</span>
                <span>Score: {score}</span>
            </div>
            <div className="progress-bar-bg">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${((currentIndex) / questions.length) * 100}%` }}
                />
            </div>

            <div className="glass-card test-card-content animate-fade-in-up">
                <span className="q-type-badge">
                    {currentQ.type}
                </span>

                <h3 className="q-label">Translate to German:</h3>
                <p className="q-text">{currentQ.q}</p>

                <form onSubmit={handleCheck}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type German translation..."
                            disabled={!!feedback}
                            autoFocus
                        />
                    </div>

                    <AnimatePresence>
                        {feedback && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`feedback-msg ${feedback.type === 'success' ? 'feedback-success' : 'feedback-error'}`}
                            >
                                {feedback.message}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {!feedback ? (
                        <button type="submit" className="btn-primary w-full">
                            Check Answer
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={handleNext}
                            className="btn-primary w-full"
                            style={{ background: 'linear-gradient(135deg, var(--accent), #3b82f6)' }}
                            autoFocus
                        >
                            {currentIndex === questions.length - 1 ? 'Finish' : 'Next Question'}
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
}
