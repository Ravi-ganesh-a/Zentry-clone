import React, { useRef } from 'react';
import gsap from 'gsap';
import AnimatedTitle from './AnimatedTitle';

const Story = () => {
    const frameRef = useRef(null);
    
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if (!element) return;

        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 500,
            ease: 'power1.inOut',
        });
    };

    const handleMouseLeave = () => {
        gsap.to(frameRef.current, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: 'power1.inOut',
        });
    };

    return (
        <section id="story" className="min-h-dvh w-screen bg-black text-blue-50 overflow-hidden">
            <div className="flex size-full flex-col items-center py-10 pb-24">
                <p className="font-general text-sm uppercase md:text-[10px]">
                    The multiversal ip world
                </p>
                <div className="relative w-full">
                    <AnimatedTitle
                        title="the story of <br /> a hidden realm"
                        sectionId="#story"
                        continerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                    />
                    
                    {/* Adjusted Image Container */}
                    <div 
                        className="relative w-full max-w-2xl mx-auto mt-10"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="w-full h-[400px] relative overflow-hidden">
                            <img
                                ref={frameRef}
                                src="./img/entrance.webp"
                                alt="entrance"
                                className="absolute w-full h-full object-cover mix-blend-difference polygon-mask"
                            />
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </section>
        
    );
};

export default Story;