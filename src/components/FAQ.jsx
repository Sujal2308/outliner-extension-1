import React, { useState } from "react";

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
            You only need a free Gemini API key from Google AI Studio to enable
            summarization.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "How do I setup my Gemini API key?",
    answer: (
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
          Summaries are usually accurate, but quality may drop on sites with
          lots of ads, paywalls, or dynamic content. Always review for important
          details.
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
      className="relative bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100"
    >
      <div className="max-w-3xl mx-auto">
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
              className="border border-[tomato] bg-black overflow-hidden shadow transition-all"
            >
              <button
                className={
                  "w-full flex justify-between items-center p-4 sm:p-6 text-left focus:outline-none bg-[tomato] " +
                  (open === idx ? "border-b-0" : "")
                }
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                <span className="text-lg font-bold text-black bungee-regular">
                  {faq.question}
                </span>
                <span
                  className="ml-4 text-4xl font-extrabold select-none"
                  style={{ lineHeight: "1.1" }}
                >
                  {open === idx ? "-" : "+"}
                </span>
              </button>
              {open === idx && (
                <>
                  <div className="w-full h-2 bg-white"></div>
                  <div
                    id={`faq-panel-${idx}`}
                    className="px-6 pb-4 bg-white text-black font-jost text-lg transition-all duration-300 opacity-100"
                    style={{
                      transition: "max-height 0.3s, opacity 0.3s",
                    }}
                  >
                    {faq.answer}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
