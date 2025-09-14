"use client";

import { useState, useEffect } from "react";

export default function ComingSoon() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Moving mouse cursor effect */}
      <div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-gray-800/10 to-gray-600/10 blur-3xl transition-all duration-300 ease-out pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.1}px, ${
            mousePosition.y * 0.1
          }px)`,
        }}
      ></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Mechanical Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Rotating Gears */}
      <div className="absolute top-20 right-20 opacity-20">
        <div className="w-32 h-32 animate-spin-slow">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" />
            <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="1" />
            {[...Array(8)].map((_, i) => (
              <line
                key={i}
                x1="50"
                y1="10"
                x2="50"
                y2="20"
                stroke="white"
                strokeWidth="2"
                transform={`rotate(${i * 45} 50 50)`}
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="absolute bottom-20 left-20 opacity-15">
        <div className="w-24 h-24 animate-spin-reverse">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="2" />
            <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="1" />
            {[...Array(6)].map((_, i) => (
              <line
                key={i}
                x1="50"
                y1="15"
                x2="50"
                y2="25"
                stroke="white"
                strokeWidth="2"
                transform={`rotate(${i * 60} 50 50)`}
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        {/* Technical Header */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-px bg-white/40"></div>
            <span className="text-sm uppercase tracking-[0.4em] text-white/60 font-mono">
              MECHANICAL ENGINEERING
            </span>
            <div className="w-16 h-px bg-white/40"></div>
          </div>
        </div>

        {/* Main Logo with Technical Design */}
        <div className="mb-12 animate-fade-in-delayed">
          <div className="relative">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight font-mono">
              JENESIS
            </h1>
            {/* Technical underline */}
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-px bg-white/60"></div>
              <div className="w-3 h-3 border border-white/60 rotate-45"></div>
              <div className="w-24 h-px bg-white/60"></div>
              <div className="w-3 h-3 border border-white/60 rotate-45"></div>
              <div className="w-8 h-px bg-white/60"></div>
            </div>
          </div>
        </div>

        {/* Engineering Status */}
        <div className="mb-16 animate-fade-in-delayed-2">
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg px-8 py-6 max-w-lg mx-auto">
            <h2 className="text-2xl md:text-3xl text-white font-light tracking-wide mb-3">
              SYSTEM IN DEVELOPMENT
            </h2>
            <p className="text-white/70 text-sm font-mono mb-4">
              Engineering precision meets innovative design
            </p>

            {/* Progress Bar */}
            <div className="relative">
              <div className="flex justify-between text-xs text-white/50 mb-2 font-mono">
                <span>PROGRESS</span>
                <span>73%</span>
              </div>
              <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-progress-load"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in-delayed-3">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">PRECISION</div>
            <div className="text-sm text-white/60 font-mono">±0.001mm</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">INNOVATION</div>
            <div className="text-sm text-white/60 font-mono">NEXT-GEN</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">EFFICIENCY</div>
            <div className="text-sm text-white/60 font-mono">99.7%</div>
          </div>
        </div>

        {/* Launch Info */}
        <div className="animate-fade-in-delayed-4">
          <div className="text-white/40 text-sm font-mono uppercase tracking-widest mb-8">
            [ EXPECTED LAUNCH: Q1 2025 ]
          </div>

          {/* Explore Button */}
          <button
            onClick={() => (window.location.href = "/explore")}
            className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-mono uppercase tracking-wider hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10">Explore Technology</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes progress-load {
          from {
            width: 0%;
          }
          to {
            width: 73%;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }
        .animate-fade-in-delayed {
          animation: fade-in 1.2s ease-out 0.3s both;
        }
        .animate-fade-in-delayed-2 {
          animation: fade-in 1.2s ease-out 0.6s both;
        }
        .animate-fade-in-delayed-3 {
          animation: fade-in 1.2s ease-out 0.9s both;
        }
        .animate-fade-in-delayed-4 {
          animation: fade-in 1.2s ease-out 1.2s both;
        }
        .animate-progress-load {
          animation: progress-load 3s ease-out 1.5s both;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
