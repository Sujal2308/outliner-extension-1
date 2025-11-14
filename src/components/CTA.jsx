import React from "react";

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: text and CTAs (center on small, left on lg) */}
        <div className="text-center lg:text-left lg:pr-8">
          <h2
            className="text-4xl sm:text-4
          xl lg:text-6xl font-extrabold text-white mb-6 leading-tight bungee-regular"
          >
            Ready to Save Hours
            <br />
            Every Week?
          </h2>

          <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed font-jost">
            Join thousands of users who are already reading smarter with
            Outliner
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8">
            <a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-10 py-5 rounded-none font-bold anton-regular text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center space-x-3 w-full sm:w-auto justify-center"
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 16c-.28 0-.53-.11-.71-.29l-3-3a1 1 0 111.42-1.42L11 12.59V4a1 1 0 112 0v8.59l1.29-1.3a1 1 0 011.42 1.42l-3 3A1 1 0 0112 16z" />
                <path d="M5 20a1 1 0 000 2h14a1 1 0 000-2H5z" />
              </svg>
              <span>Install Free Now</span>
            </a>

            <a
              href="https://github.com/Sujal2308/outliner-extension-1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Outliner on GitHub"
              className="bg-transparent border-2 border-white text-white px-6 py-5 rounded-none font-bold anton-regular text-xl w-full sm:w-auto flex items-center justify-center space-x-3"
            >
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.111.82-.261.82-.579 0-.287-.011-1.244-.017-2.249-3.338.726-4.042-1.614-4.042-1.614-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.76-1.604-2.665-.304-5.466-1.333-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.874.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.805 5.624-5.475 5.921.43.372.814 1.103.814 2.222 0 1.606-.015 2.901-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.299 24 12 24 5.37 18.63 0 12 0z" />
              </svg>
              <span>View on GitHub</span>
            </a>
          </div>

          {/* Trust badges moved to bottom-centered container */}

          {/* Social proof removed per request */}
        </div>

        {/* Right: image (hidden on smaller screens) */}
        <div className="hidden lg:flex justify-end items-center lg:pr-8">
          <img
            src="/summaryStyle.png"
            alt="Summary style"
            className="w-full max-w-lg object-contain mix-blend-multiply opacity-95"
          />
        </div>
      </div>

      {/* Glassmorphic strip full-bleed across viewport and badges centered */}
      <div className="absolute left-0 right-0 bottom-0 h-16 pointer-events-none z-10">
        <div className="w-full h-full bg-blue-800/30 backdrop-blur-md border-t border-b border-white/10"></div>
      </div>

      {/* Bottom-centered trust badges (vertically centered within strip) */}
      <div className="absolute left-0 right-0 bottom-0 flex justify-center z-20 pointer-events-auto">
        <div className="w-full h-16 flex items-center justify-center gap-8 text-white/90">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs sm:text-sm font-semibold">100% Free</span>
          </div>

          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs sm:text-sm font-semibold">No Sign Up</span>
          </div>

          <div className="hidden sm:flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs sm:text-sm font-semibold">
              Privacy Protected
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs sm:text-sm font-semibold">
              Open Source
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
