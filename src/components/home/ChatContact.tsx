"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  id: number;
  text: string;
  sent: boolean;
};

type Stage = "idle" | "asking-name" | "asking-email" | "done";

function Avatar() {
  return (
    <div className="w-7 h-7 rounded-full bg-black dark:bg-white flex items-center justify-center flex-shrink-0">
      <span className="text-white dark:text-black text-[9px] font-bold tracking-wider">NN</span>
    </div>
  );
}

const submitContact = async (payload: { name: string; email: string }) => {
  // TODO: replace with actual API endpoint
  console.log("Contact payload ready:", payload);
};

export default function ChatContact() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "want to work together? just want to chat? send me a message here (no, for real)",
      sent: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [stage, setStage] = useState<Stage>("idle");
  const [userName, setUserName] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);

  useEffect(() => {
    if (stage === "idle") return;
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, stage]);

  const addBotMessage = (text: string, delay = 1200) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages((prev) => [
            ...prev,
            { id: nextId.current++, text, sent: false },
          ]);
          resolve();
        }, delay);
      }, 400);
    });
  };

  const handleFocus = () => {
    if (stage !== "idle") return;
    setStage("asking-name");
    addBotMessage("What is your name?");
  };

  const send = async () => {
    const text = input.trim();
    if (!text || stage === "done") return;

    setMessages((prev) => [
      ...prev,
      { id: nextId.current++, text, sent: true },
    ]);
    setInput("");

    if (stage === "asking-name") {
      setUserName(text);
      setStage("asking-email");
      await addBotMessage(`Nice to meet you, ${text}!`, 1000);
      await addBotMessage("What's about email? I keep it old school :D");
    } else if (stage === "asking-email") {
      setStage("done");
      const payload = { name: userName, email: text };
      await submitContact(payload);
      await addBotMessage("Got it! I'll be in touch soon.", 1000);
    }
  };

  const placeholder =
    stage === "asking-name" ? "Your name..." :
    stage === "asking-email" ? "Your email..." :
    stage === "done" ? "Talk soon!" : "Message";

  return (
    <div className="glow-border glow-border-always rounded-2xl p-6 w-4/5 max-sm:w-full mx-auto">
      {/* Messages */}
      <div className="flex flex-col gap-2.5 min-h-[120px] mb-5">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end gap-2 ${msg.sent ? "flex-row-reverse" : ""}`}
          >
            {!msg.sent && <Avatar />}
            <div
              className={`max-w-[75%] px-3.5 py-2.5 rounded-[18px] text-[15px] leading-snug ${
                msg.sent
                  ? "bg-black dark:bg-white text-white dark:text-black rounded-br-[4px]"
                  : "bg-black/5 dark:bg-white/10 text-black dark:text-white rounded-bl-[4px]"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-end gap-2">
            <Avatar />
            <div className="flex items-center gap-1 px-3.5 py-3 bg-black/5 dark:bg-white/10 rounded-[18px] rounded-bl-[4px]">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-[7px] h-[7px] rounded-full bg-black/30 dark:bg-white/30 animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input row */}
      <div className="flex items-center gap-2.5">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          onFocus={handleFocus}
          placeholder={placeholder}
          disabled={stage === "done"}
          className="flex-1 bg-transparent border border-black/20 dark:border-white/20 rounded-full px-3.5 py-2 text-[15px] outline-none text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 focus:border-black/40 dark:focus:border-white/40 transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        />

        <button
          onClick={send}
          disabled={stage === "done"}
          aria-label="Send message"
          className={`w-8 h-8 rounded-full bg-green flex items-center justify-center flex-shrink-0 transition-opacity duration-150 disabled:cursor-not-allowed ${
            input.trim() && stage !== "done" ? "opacity-100" : "opacity-30"
          }`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20V8M12 8l-4 4M12 8l4 4" />
          </svg>
        </button>
      </div>
    </div>
  );
}
