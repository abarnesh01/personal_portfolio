"use client";

/**
 * Jarvis Voice Assistant Utility
 * Uses the browser SpeechSynthesis API to provide a calm, deep AI voice persona.
 */

interface SpeakOptions {
    pitch?: number;
    rate?: number;
    volume?: number;
}

const DEFAULT_OPTIONS: SpeakOptions = {
    pitch: 0.9,
    rate: 0.95,
    volume: 0.8,
};

let lastText = "";
let lastTime = 0;

export const speak = (text: string, options: SpeakOptions = {}) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    // Prevent triggering too frequently (throttle: 2 seconds)
    const now = Date.now();
    if (text === lastText && now - lastTime < 2000) return;

    // Cancel any ongoing speech to prevent overlapping
    window.speechSynthesis.cancel();
    console.log(`[Jarvis]: "${text}"`);

    const msg = new SpeechSynthesisUtterance(text);
    const settings = { ...DEFAULT_OPTIONS, ...options };

    msg.pitch = settings.pitch!;
    msg.rate = settings.rate!;
    msg.volume = settings.volume!;
    msg.lang = "en-US";

    // Try to find a deep/male voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v =>
        (v.name.toLowerCase().includes("male") || v.name.toLowerCase().includes("david") || v.name.toLowerCase().includes("google uk english male")) &&
        v.lang.startsWith("en")
    );

    if (preferredVoice) {
        msg.voice = preferredVoice;
    }

    msg.onstart = () => {
        lastText = text;
        lastTime = Date.now();
    };

    window.speechSynthesis.speak(msg);
};

// Help browser populate voices array (required for some browsers)
if (typeof window !== "undefined" && window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
    }
}
