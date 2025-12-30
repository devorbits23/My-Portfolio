import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom';

const Stairs = (props) => {

    const stairAnimate = useRef(null);
    const appRef = useRef(null);


    const routeLocation = useLocation().pathname;

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power4.inOut", duration: 0.8 }
        });

        // Show overlay
        tl.set(stairAnimate.current, { autoAlpha: 1 });

        // Animate stairs in (grow from 0 to full height)
        tl.fromTo(".stair",
            { height: 0 },
            { height: "100%", stagger: 0.1 }
        );

        // Animate stairs out (slide down off screen)
        tl.to(".stair", {
            y: "100%",
            stagger: 0.1
        });

        // Hide overlay after animation
        tl.set(stairAnimate.current, { autoAlpha: 0 });

        // Reset stairs position for next transition
        tl.set(".stair", { y: "0%", height: "100%" });

        gsap.from(appRef.current,{
            opacity:0,
            delay:1
        })

    }, [routeLocation]);
    return (


        <div className='bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a]'>
            {/* Stair overlay always above everything */}
            <div className="transition-anim fixed inset-0 z-50  w-screen h-screen flex pointer-events-none" ref={stairAnimate}>
                <div className="stair h-full w-[20%] bg-[#111]"></div>
                <div className="stair h-full w-[20%] bg-[#111]"></div>
                <div className="stair h-full w-[20%] bg-[#111]"></div>
                <div className="stair h-full w-[20%] bg-[#111]"></div>
                <div className="stair h-full w-[20%] bg-[#111]"></div>
            </div>
            <div ref={appRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Stairs