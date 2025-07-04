import React from 'react'
import { useRef , useState, useEffect} from 'react'
import { TiLocationArrow } from 'react-icons/ti'
import Button from './Button'
import { useWindowScroll } from 'react-use'
import gsap from 'gsap'

const navItems = ['Nexus', 'Valut', 'Prologue', 'About', 'Contact'];

const NavBar = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);

    const navContinerRef = useRef(null);
    const audioElementRef = useRef(null);

    const {y: currentScrollY} = useWindowScroll();

    
    useEffect(() =>{
        if(currentScrollY === 0){
            setIsNavVisible(true);
            navContinerRef.current.classList.remove('floating-nav');
        }else if(currentScrollY > lastScrollY){
            setIsNavVisible(false);
            navContinerRef.current.classList.add('floating-nav');
        }else if(currentScrollY < lastScrollY){
            setIsNavVisible(true);
            navContinerRef.current.classList.add('floating-nav');
        }
        setLastScrollY(currentScrollY);
    },[currentScrollY,lastScrollY])

    useEffect(() => {
        gsap.to(navContinerRef.current,{
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        })
    },[isNavVisible])

    const toggleAudioIndicator = () =>{
        setIsAudioPlaying((prev) => !prev);
        setIsIndicatorActive((prev) => !prev);
    }

    useEffect(() => {
        if(isAudioPlaying){
            audioElementRef.current.play();
        }else{
            audioElementRef.current.pause();
        }
    }, [isAudioPlaying]);
    

    return (
    <div ref={navContinerRef} className='fixed inset-x-0 top-3 z-50 h-10 border-none trasition-all duration-700 sm:inset-x-6'>
        <header className='absolute top-1/2 w-full -translate-y-1/2'>
            <nav className='flex size-full items-center justify-between p-4 '>
                <div className='flex items-center gap-7 '>
                    <img src="./img/DP.jpg" alt="logo" className='w-10' />
                    <Button
                        id='product-button'
                        title='Products'
                        rightIcon={<TiLocationArrow />}
                        containerClass="bg-blue-50 md:flex hidden !py-1 item-center justify-center gap-1"
                    />
                </div>
                <div className='flex h-full items-center '>
                    <div className='hidden md:block' >
                        {navItems.map((item, index) => (
                            <a key={index}  href={`#${item.toLowerCase()}`} className='nav-hover-btn'>
                                {item}
                            </a>
                        ))}
                    </div>
                    <button className='ml-10 flex item-center cursor-pointer space-x-0.5'onClick={toggleAudioIndicator} >
                        <audio src="./audio/loop.mp3" ref={audioElementRef} className='hidden' loop />
                            {[1,2,3,4].map((bar) => (
                                <div key={bar} className={`indicator-line ${isIndicatorActive ? 'active' : ''}`} style={{ animationDelay :`${bar * 0.1}s}`}}/>
                            ))}
                    </button>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default NavBar