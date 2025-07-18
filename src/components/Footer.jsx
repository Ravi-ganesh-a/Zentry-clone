import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import React from 'react'
const links = [
    { href: 'https://github.com/Ravi-ganesh-a/Zentry-clone', icon: <FaGithub /> },
    { href: 'https://www.linkedin.com/in/ravi-ganesh-a-a135002a8', icon: <FaLinkedin /> },
    { href: 'https://twitter.com', icon: <FaTwitter /> },
    { href: 'https://instagram.com', icon: <FaInstagram /> },
]

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'> 
             <p className='text-center text-sm md:text-left'>
                &copy; Ravi Ganesh A 2025. All rights reserved
             </p>
             <div className='flex justify-center gap-4 md:justify-start'>
                {links.map((link,index) => (
                    <a  key={index} 
                        href={link.href} 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        className='text-black transition-colors duration-500 ease-in-out hover:text-white '>
                        {link.icon}
                    </a>
                ))}
             </div>
        </div>
    </footer>
  )
}

export default Footer