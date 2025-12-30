import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Stairs = ({ children }) => {
  const stairAnimate = useRef(null);
  const appRef = useRef(null);
  const tlRef = useRef(null); 
  const routeLocation = useLocation().pathname;

  useGSAP(() => {
    if (tlRef.current) {
      tlRef.current.kill();
    }

    gsap.killTweensOf(".stair");
    gsap.killTweensOf(".stair-text");
    gsap.killTweensOf(appRef.current);

    // Faster defaults: shorter duration
    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 0.5 } // was 0.8
    });
    tlRef.current = tl;

    tl.set(stairAnimate.current, { autoAlpha: 1 });

    // Faster stagger
    tl.fromTo(".stair", { height: 0 }, { height: "100%", stagger: 0.07 });

    tl.fromTo(
      ".stair-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.07 },
      "-=0.4" // overlap slightly
    );

    tl.to(".stair", { y: "100%", stagger: 0.07 });
    tl.to(".stair-text", { opacity: 0, y: 50, stagger: 0.07 }, "-=0.6");

    tl.set(stairAnimate.current, { autoAlpha: 0 });

    tl.add(() => {
      gsap.set(".stair", { y: "0%", height: "100%" });
      gsap.set(".stair-text", { opacity: 0, y: 0 });
    });

    // Faster app content fade-in
    tl.from(appRef.current, {
      opacity: 0,
      y: 20, // smaller movement for snappier feel
      duration: 0.8 // was 1
    }, "-=1"); // overlap earlier
  }, [routeLocation]);

  return (
    <div className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] min-h-screen">
      <div
        className="transition-anim fixed inset-0 z-50 w-screen h-screen flex pointer-events-none text-white"
        ref={stairAnimate}
      >
        {["D", "E", "V", "O", "R", "B", "I", "T", "S"].map((letter, i) => (
          <div
            key={i}
            className="stair flex-1 h-full bg-gradient-to-tr from-blue-900 via-indigo-900 to-cyan-900 flex items-center justify-center"
          >
            <span className="stair-text font-extrabold text-5xl tracking-widest drop-shadow-lg">
              {letter}
            </span>
          </div>
        ))}
      </div>

      <div ref={appRef}>
        {children}
      </div>
    </div>
  );
};

export default Stairs;