import { useEffect, useRef, useState } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);
  const animationFrameId = useRef();
  const mouseMoveHandler = useRef();
  const hoverRef = useRef(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };

    // Mouse move handler
    mouseMoveHandler.current = (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };
    document.addEventListener("mousemove", mouseMoveHandler.current);

    // Animation loop
    function loop() {
      if (!hoverRef.current) {
        const delay = 6;
        cursorPos.x += (mousePos.x - cursorPos.x) / delay;
        cursorPos.y += (mousePos.y - cursorPos.y) / delay;
        gsap.to(cursor, { x: cursorPos.x, y: cursorPos.y, duration: 0.1 });
      }
      animationFrameId.current = requestAnimationFrame(loop);
    }
    animationFrameId.current = requestAnimationFrame(loop);

    // Hover logic
    const handleMouseOver = (e) => {
      const target = e.currentTarget;
      const rect = target.getBoundingClientRect();
      if (target.dataset.cursor === "icons") {
        cursor.classList.add("cursor-icons");
        gsap.to(cursor, { x: rect.left, y: rect.top, duration: 0.1 });
        cursor.style.setProperty("--cursorH", `${rect.height}px`);
        hoverRef.current = true;
      }
      if (target.dataset.cursor === "disable") {
        cursor.classList.add("cursor-disable");
      }
    };
    const handleMouseOut = () => {
      cursor.classList.remove("cursor-disable", "cursor-icons");
      hoverRef.current = false;
    };
    const cursorTargets = document.querySelectorAll("[data-cursor]");
    cursorTargets.forEach((item) => {
      item.addEventListener("mouseover", handleMouseOver);
      item.addEventListener("mouseout", handleMouseOut);
    });

    // Listen for hide cursor events from sidebar
    const handleHideCursor = (e) => {
      setIsHidden(e.detail?.hide || false);
    };
    window.addEventListener('hideCursor', handleHideCursor);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler.current);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      cursorTargets.forEach((item) => {
        item.removeEventListener("mouseover", handleMouseOver);
        item.removeEventListener("mouseout", handleMouseOut);
      });
      window.removeEventListener('hideCursor', handleHideCursor);
    };
  }, []);

  // Apply hide/show effect
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    if (isHidden) {
      cursor.classList.add("cursor-hidden");
      gsap.to(cursor, { 
        opacity: 0, 
        scale: 0.5, 
        duration: 0.3, 
        ease: "power2.out" 
      });
    } else {
      cursor.classList.remove("cursor-hidden");
      gsap.to(cursor, { 
        opacity: 1, 
        scale: 1, 
        duration: 0.3, 
        ease: "power2.out" 
      });
    }
  }, [isHidden]);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;