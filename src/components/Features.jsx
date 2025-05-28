import React, { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti"

const BentoTilt = ({ children, className = ''}) =>{
    const [transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef(null);

    const handleMouseMove = (e) =>{
        if(!itemRef.current) return;

        const {left, top, width, height} = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left ) / width;
        const relativeY = (e.clientY - top ) / height;

        const tiltX = (relativeY - 0.5) * 8;
        const tiltY = (relativeX - 0.5) * -8;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.96)`;    
    
        setTransformStyle(newTransform);
    }


    const handleMouseLeave = ( ) =>{ 
        setTransformStyle('');
    };
    
    return(
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform: transformStyle}}>
            {children}
        </div>
    )
}

const BentoCard = ({src, title, description, isComingSoon })=> {
    return(
        <div className='relative size-full'>
            <video src={src}
            loop
            muted
            autoPlay
            className='absolute left-0 top-0 size-full object-cover object-center'
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                    <h1 className="bento-title text-6xl special-font" >{title}</h1>
                    {description && (<p className="mt-3 max-w-64 text-xs md:text-base lg:text-xs sm:text-sm">{description}</p>)}
                </div> 

            </div>
            
        </div>
    )
}

const Features = () => {
  return (
    <section className='bg-black pb-52'>
        <div className='container mx-auto px-3 md:px-10'>
            <div className='px-5 py-32'>
                <p className='font-circular-web text-lg text-blue-50 '> Into The Metagame Layer</p>

            <p className='font-circular-web text-md text-blue-50 max-w-md opacity-50'>
                Immerse yourself in a rich and ever-expanding universe where a vibrant array of products
                converage into an interconnected overlay experiance on your world
            </p>
            </div>
        <div className="lg:px-12 mr-5">    
        <BentoTilt className="border-hsla relative mb-7 lg:h-[90vh] h-96 w-full overflow-hidden rounded-md md:h-[55vh]">
            <BentoCard
              src="./videos/feature-1.mp4"
              title={<>radint</>}
              description="A Cross-platform metagame app, turning your activities across Web2 and Web3 
              games into a rewarding adventure "
              isComingSoon={true}
        />
        </BentoTilt >
        <div className="grid h-[170vh] grid-cols-2 grid-rows-3 gap-7 ">
            <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                <BentoCard
                  src="./videos/feature-2.mp4"
                  title={<>zigma</>}
                  description="An anime and gaming-inspired NFT collection - the IP primed for expansion"
                />
            </BentoTilt>
            <BentoTilt className="bento-tilt_1 row-span-1 ms-12 md:col-span-1 md:ms-0">
                <BentoCard
                  src="./videos/feature-3.mp4"
                  title={<>nexus</>}
                  description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities"
            
                />
            </BentoTilt>
            <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                <BentoCard
                  src="./videos/feature-4.mp4"
                  title={<>azul</>}
                  description="A cross-world AI Agent - elevating your gameplay to be more fun and productive "
            
                />
            </BentoTilt>
            <div>
                <BentoTilt className="bento-tilt_2 size-full">
                    <div className="flex size-full flex-col justify-between bg-violet-300 p-5 ">
                        <h1
                        className="bento-title special-font w-32 leading-9 text-black">M<b>o</b>re Co<b>m</b>ing S<b>o</b>on</h1>
                        <TiLocationArrow className="m-5 scale-[4] self-end" />
                    </div>
                </BentoTilt>
            </div>
            <BentoTilt className="bento-tilt_2">
                    
                <video
                    src="./videos/feature-5.mp4"
                    loop
                    muted
                    autoPlay
                    className="size-full object-cover object-center"
                />
            </BentoTilt>
        </div>
        </div>
    </div>

    </section>
  )
}

export default Features