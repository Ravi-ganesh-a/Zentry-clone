import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";

import React from 'react'

const AnimatedTitle = ({ title, continerClass}) => {
    const continerRef = useRef(null);

    useEffect( () =>{
        const ctx = gsap.context(() => {
            const titleAinmation = gsap.timeline({
                scrollTrigger:{
                    trigger:continerRef.current,
                    start: '100 bottom',
                    end: 'center bottom',
                    toggleAction:'play none none reverse',
                },
            });
            titleAinmation.to('.animated-word',{
                opacity:1,
                transform:'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
                ease:'power2.inOut',
                stagger:0.02,
            },
        0
    );
        }, continerRef);

        return () => ctx.revert(); 
    },[]);

  return (
    <div ref={continerRef} className={`animated-title ${continerClass}`} >
        {title.split('<br />').map((line, index) => (
            <div key={index} className='flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3' >
                {line.split(' ').map((word, i) =>(
                    <span key={i} className='animated-word' dangerouslySetInnerHTML={{__html: word}} ></span>
                ))}
            </div>
        ))}
    </div>
    
  );
};

export default AnimatedTitle