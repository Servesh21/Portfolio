import React, { useState, useEffect, useRef } from 'react';
import {  Github, Linkedin, ArrowRight, Instagram, Star } from 'lucide-react';
import Cursor from '../components/Cursor'
import StarryBackground from '../components/StarryBackground';


const PortfolioHero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isHoveringSidebar, setIsHoveringSidebar] = useState(false);
  const [fillOrigin, setFillOrigin] = useState({ x: 50, y: 50 });
  const [hideCursor, setHideCursor] = useState(false);
  const [sidebarFillStarted, setSidebarFillStarted] = useState(false);
  const sidebarRef = useRef(null);

  const roles = [
    'Full Stack Developer',
    'Creative Coder',
    'Problem Solver'
  ];

  // Calculate fill origin when mouse enters sidebar
  const handleSidebarMouseEnter = (e) => {
    if (sidebarRef.current) {
      const rect = sidebarRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setFillOrigin({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
    }
    setIsHoveringSidebar(true);
    setHideCursor(true);
    
    // Dispatch event for cursor to hide
    window.dispatchEvent(new CustomEvent('hideCursor', { 
      detail: { hide: true } 
    }));
  };

  const handleSidebarMouseLeave = () => {
    setIsHoveringSidebar(false);
    setHideCursor(false);
    
    // Dispatch event for cursor to show
    window.dispatchEvent(new CustomEvent('hideCursor', { 
      detail: { hide: false } 
    }));
  };

  // Cursor blinking
  useEffect(() => {
    const cursor = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursor);
  }, []);

  // Typing animation
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150;
    const fullText = roles[currentIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, roles]);

  // Handle sidebar fill delay
  useEffect(() => {
    let timer;
    if (isHoveringSidebar) {
      timer = setTimeout(() => setSidebarFillStarted(true), 750);
    } else {
      setSidebarFillStarted(false);
    }
    return () => clearTimeout(timer);
  }, [isHoveringSidebar]);

  return (
    <>
    <Cursor />
    <div className="relative min-h-screen  from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Starry background */}
      {/* <div className="fixed inset-0 w-screen h-screen">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
      </div> */}
      <StarryBackground />
      

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen px-4 text-center">
        {/* Main content - Properly centered */}
        <div className="space-y-8 max-w-4xl mx-auto w-full flex flex-col items-center ">
          {/* Greeting */}
          <div className="opacity-0 animate-fade-in-up">
            <p className="text-lg md:text-xl text-gray-300 font-light tracking-wider uppercase">
              Hello, I'm
            </p>
          </div>

          {/* Name */}
          <div className="opacity-0 animate-fade-in-up animation-delay-500">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent leading-tight">
              Servesh Khade
            </h1>
          </div>

          {/* Typing animation */}
          <div className="opacity-0 animate-fade-in-up animation-delay-1000">
            <div className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-300 min-h-[3rem] md:min-h-[4rem] lg:min-h-[5rem]">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {currentText}
              </span>
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 text-white`}>
                |
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="opacity-0 animate-fade-in-up animation-delay-1500">
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I am a Full Stack Developer with a passion for building dynamic and responsive web applications. Currently pursuing my Bachelor's in Engineering in Information Technology from Don Bosco Institute of Technology, Mumbai, I thrive on solving complex problems and creating innovative solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="opacity-0 animate-fade-in-up animation-delay-2000 flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <a href='/#projects' className="group relative px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/25 hover:scale-105 transform border border-gray-600" target="_blank" rel="noopener noreferrer">
              <span className="flex items-center gap-2">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white to-gray-300 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl -z-10"></div>
            </a>
            
            {/* <a href='/#contact' className="px-8 py-4 border-2 border-gray-400 rounded-full text-gray-300 font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-white/25">
              Get In Touch
            </a> */}
          </div>
        </div>

        {/* Blue Social Links Sidebar with radial fill and cursor integration */}
        {/* Modern Floating Social Sidebar */}
{/* Directional fill sidebar */}
<div className="fixed bottom-6 left-6 z-50 hidden md:block">
  <div
    ref={sidebarRef}
    onMouseEnter={handleSidebarMouseEnter}
    onMouseMove={handleSidebarMouseEnter}
    onMouseLeave={handleSidebarMouseLeave}
    className="relative flex flex-col items-center gap-6 px-4 py-6 rounded-full"
  >
    {/* Animated fill background */}
<div
  className="absolute inset-0 bg-[#5c33cc] transition-transform duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] z-0"
  style={{
    transform: isHoveringSidebar ? 'scale(1)' : 'scale(0)',
    transformOrigin: `${fillOrigin.x}% ${fillOrigin.y}%`,
    borderRadius: '9999px',
    boxShadow: isHoveringSidebar
      ? '0 0 8px 2px #a855f770, 0 0 16px 4px #9333ea70'
      : 'none',
    pointerEvents: 'none',
  }}
></div>


    {/* Icons */}
    <div className="relative z-10 flex flex-col items-center gap-6">
      {[
        { Icon: Github, href: 'https://github.com/Servesh21', label: 'GitHub' },
        { Icon: Linkedin, href: 'https://www.linkedin.com/in/servesh-khade-459858297/', label: 'LinkedIn' },
        { Icon: Instagram, href: 'https://www.instagram.com/servesh_khade/', label: 'Instagram' },
      ].map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="transition-transform duration-300 transform hover:scale-125 group"
        >
          <Icon className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
        </a>
      ))}
    </div>
  </div>
</div>


      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-2500 {
          animation-delay: 2.5s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
          .animate-ping {
    animation: ping 1.2s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  @keyframes ping {
    75%, 100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
      `}</style>
    </div>
    </>
  );
};

export default PortfolioHero;