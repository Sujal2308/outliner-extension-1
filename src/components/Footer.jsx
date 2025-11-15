import React, { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [feedbackText, setFeedbackText] = useState("");

  const submitFeedback = (e) => {
    e.preventDefault();
    const body = feedbackText;
    const mailto = `mailto:feedback@outliner.app?subject=${encodeURIComponent(
      "Outliner website feedback"
    )}&body=${encodeURIComponent(body)}`;
    // Use mailto as a fallback so no backend is required.
    window.location.href = mailto;
    // clear form after launching mail client
    setFeedbackText("");
  };
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 md:space-x-4 mb-4">
              <img
                src="/pencil.png"
                alt="Outliner Logo"
                className="w-12 h-12 md:w-20 md:h-20"
              />
              <span className="text-2xl md:text-5xl font-extrabold text-white">
                Outliner
              </span>
            </div>
            {/* Mobile description */}
            <p className="text-gray-400 mb-4 max-w-md md:hidden">
              The smartest way to consume content on the web. AI-powered
              summarization that saves you time and keeps you informed.
            </p>
            {/* Desktop (md+) two-line description */}
            <p className="text-gray-400 mb-4 max-w-sm hidden md:block text-lg md:text-xl font-medium font-jost">
              Instantly summarize any article or web page with AI.
              <br />
              Get the key points, save time, and stay informed.
            </p>
            <div className="flex space-x-4">
              {/* Twitter (X) */}
              <a
                href="https://x.com/sujal_bhugul"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sujal23/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/Sujal2308"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Inline feedback area placed where Quick Links & Resources were removed */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-3">
              <h4 className="text-white text-lg font-semibold m-0">
                Send us feedback
              </h4>
              <img
                src="/feedback.png"
                alt="feedback"
                className="w-6 h-6 ml-3"
              />
            </div>
            <form onSubmit={submitFeedback} className="space-y-3">
              <textarea
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                required
                rows={4}
                placeholder="Tell us what you liked or how we can improve..."
                className="w-full p-3 rounded bg-gray-800 text-gray-100 md:min-h-[160px]"
              />

              <div className="flex items-center justify-between w-full">
                <button
                  type="submit"
                  className="flex items-center px-4 py-2 rounded font-bold text-black"
                  style={{
                    backgroundColor: "tomato",
                    fontFamily:
                      "'Jost', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
                  }}
                >
                  Submit
                  <img src="/send.png" alt="Send" className="w-5 h-5 ml-2" />
                </button>

                <div className="flex items-center space-x-2 text-green-300">
                  <span
                    className="inline-block w-3 h-3 rounded-full bg-green-400 animate-pulse"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium">
                    All systems operational
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Minimal copyright at bottom */}
        <div className="pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-xs text-center">
            © {currentYear} Outliner — Read less, know more.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
