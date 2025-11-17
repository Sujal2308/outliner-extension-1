import React, { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "Is Outliner AI free to use?",
    answer: (
      <>
        <span className="block mb-1">
          Yes, Outliner AI is 100% free for everyone.
        </span>
        <ul className="list-disc pl-6 space-y-1">
          <li>No premium or paid plans—ever.</li>
          <li>No freemium model or hidden costs.</li>
          <li>No sign-up or account required.</li>
          <li>
            You only need a free Gemini API key from Google AI Studio to enable summarization.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "How do I setup my Gemini API key?",
    answer: (
      <>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Go to{" "}
            <a
              href="https://aistudio.google.com/app/apikey"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google AI Studio
            </a>{" "}
            and sign in.
          </li>
          <li>Click "Create API Key" and copy the generated key.</li>
          <li>Open the Outliner extension popup in your browser.</li>
          <li>Go to Settings (gear icon).</li>
          <li>Paste your Gemini API key in the provided field and save.</li>
          <li>You're ready to summarize any page!</li>
        </ul>
      </>
    ),
  },
  {
    question: "Which browsers are supported?",
    answer:
      "Currently, Outliner AI is available for Chrome and other Chromium-based browsers (like Edge, Brave, Opera).",
  },
  {
    question: "How accurate are the generated summaries?",
    answer: (
      <>
        <span className="block mb-1">
          Summaries are usually accurate, but quality may drop on sites with lots of ads, paywalls, or dynamic content. Always review for important details.
        </span>
      </>
    ),
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes. Your API key and summaries are processed locally in your browser. Nothing is sent to any external server except Google Gemini API.",
  },
  {
    question: "Can I summarize any website?",
    answer:
      "You can summarize almost any public webpage, article, blog, or research paper. Some paywalled or highly dynamic sites may have limitations.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);
  return (
    <section
      id="faq"
      className="relative min-h-screen w-full bg-[#020617] py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100 overflow-hidden"
    >
      {/* Crimson Depth Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(125% 125% at 50% 90%, #23272f 40%, #475569 100%)",
          backgroundSize: "100% 100%",
        }}
      />
      {/* Grid Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            `linear-gradient(rgba(255,255,255,0.32) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.32) 1px, transparent 1px)`,
            backgroundSize: '56px 56px',
          backgroundPosition: '0 0',
          mixBlendMode: 'overlay',
        }}
      />
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white mb-4 bungee-regular">
          Frequently Asked Questions
        </h2>
        <p className="text-base text-gray-500 mb-8 font-jost">
          Answers to common questions about Outliner AI, setup, privacy, and
          supported features.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="shadow-lg transition-all rounded-xl border border-white/10"
            >
              <button
                className={
                  "w-full flex justify-between items-center p-4 sm:p-5 lg:p-4 text-left focus:outline-none bg-blue-700 " +
                  (open === idx ? "border-b-0" : "")
                }
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                <span className="text-lg font-bold text-white bungee-regular">
                  {faq.question}
                </span>
                <span
                  className="ml-4 text-4xl font-extrabold select-none"
                  style={{ lineHeight: "1.1" }}
                >
                  {open === idx ? "-" : "+"}
                </span>
              </button>
              <FAQAnswer open={open === idx} answer={faq.answer} idx={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Smoothly animated FAQ answer
const FAQAnswer = ({ open, answer, idx }) => {
  const ref = React.useRef(null);
  const [height, setHeight] = React.useState(0);
  const [shouldRender, setShouldRender] = React.useState(open);

  useEffect(() => {
    if (open) setShouldRender(true);
    if (ref.current && (open || height === 0)) {
      setHeight(ref.current.scrollHeight);
    }
    if (!open && height > 0) {
      const timeout = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [open, answer, height]);

  // Always render content if open or if not measured yet (height 0)
  const showContent = open || height === 0 || shouldRender;

  return (
    <div
      id={`faq-panel-${idx}`}
      className="transition-all duration-300 ease-in-out overflow-hidden"
      style={{
        maxHeight: open ? height : 0,
        opacity: open ? 1 : 0,
        transition: "max-height 0.3s, opacity 0.3s",
        pointerEvents: open ? "auto" : "none",
      }}
      aria-hidden={!open}
    >
      <div ref={ref} style={{ position: "relative" }}>
        {showContent && (
          <div
            className="px-6 pb-4 text-white font-jost text-lg bg-gray-800"
            style={{ marginTop: '8px', borderRadius: 0 }}
          >
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
