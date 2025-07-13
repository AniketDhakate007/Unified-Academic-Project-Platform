import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const Chatbot = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-[350px] h-[500px] bg-white rounded-xl shadow-xl border overflow-hidden">
          <iframe
            src="https://ai-summarizer-bot.vercel.app/"
            title="AI Chatbot"
            className="w-full h-full border-none"
          />
        </div>
      )}
    </>
  );
};

export default Chatbot;
