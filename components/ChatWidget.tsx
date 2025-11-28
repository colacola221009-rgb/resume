import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { RESUME_DATA } from '../constants';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `Hi! I'm ${RESUME_DATA.name.split(' ')[0]}'s AI Assistant. Ask me anything about his experience, skills, or projects!`
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue.trim()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(userMsg.text);

    const modelMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText
    };

    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 print:hidden font-sans">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-14 h-14 bg-primary-600 hover:bg-primary-500 text-white rounded-full shadow-lg shadow-primary-900/50 transition-all duration-300 hover:scale-110"
          aria-label="Open Chat"
        >
          <MessageSquare size={24} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-slate-900"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-[90vw] md:w-[400px] h-[500px] flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-slate-800 p-4 flex justify-between items-center border-b border-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary-500 to-purple-500 flex items-center justify-center">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Ask AI about Alex</h3>
                <span className="flex items-center gap-1 text-xs text-green-400">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  Online
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                  msg.role === 'user' ? 'bg-slate-700' : 'bg-primary-600/20'
                }`}>
                  {msg.role === 'user' ? <User size={14} /> : <Sparkles size={14} className="text-primary-400" />}
                </div>
                <div 
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-primary-600 text-white rounded-br-none' 
                      : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                 <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-primary-600/20">
                    <Sparkles size={14} className="text-primary-400" />
                 </div>
                 <div className="bg-slate-800 rounded-2xl rounded-bl-none px-4 py-3 border border-slate-700">
                    <Loader2 size={16} className="animate-spin text-primary-400" />
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-4 bg-slate-800/50 border-t border-slate-700">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask e.g. 'What is his tech stack?'"
                className="w-full bg-slate-950 text-white placeholder-slate-500 rounded-full pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600 border border-slate-700"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-500 transition-colors"
              >
                <Send size={14} />
              </button>
            </div>
            <div className="text-center mt-2">
                <p className="text-[10px] text-slate-500">Powered by Gemini AI • Responses may vary</p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};