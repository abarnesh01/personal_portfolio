"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Decorative Gradient */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-purple/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            Let&apos;s Build <br />
                            <span className="text-gradient">Something Great</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-sm">
                            Have a project in mind or just want to chat? Feel free to reach out. I&apos;m always open to new opportunities.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: <Mail />, label: "Email", value: "hello@abarnesh.dev", color: "text-blue-400" },
                                { icon: <Phone />, label: "Phone", value: "+1 (555) 000-0000", color: "text-purple-400" },
                                { icon: <MapPin />, label: "Location", value: "New York, USA", color: "text-red-400" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 group">
                                    <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{item.label}</p>
                                        <p className="text-lg font-bold text-white">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-10 rounded-[2.5rem] border-white/5"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 ml-1">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-accent-blue outline-none text-white transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-accent-blue outline-none text-white transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400 ml-1">Subject</label>
                                <input
                                    type="text"
                                    placeholder="Project Inquiry"
                                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-accent-blue outline-none text-white transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400 ml-1">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-accent-blue outline-none text-white transition-colors resize-none"
                                />
                            </div>

                            <button className="w-full py-5 rounded-2xl bg-gradient-primary text-white font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-opacity glow-blue">
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
