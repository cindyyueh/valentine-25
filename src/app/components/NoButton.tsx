"use client";
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react';


export default function NoButton() {
    const [isHovering, setIsHovering] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [tapText, setTapText] = useState('No');
    const MyRouter = useRouter();

    const useIsMobile = function () {
        const [isMobile, setIsMobile] = useState(false);
      
        useEffect(() => {
          const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
          };
      
          // Initial check on mount
          handleResize();
      
          // Listen for window resize events
          window.addEventListener('resize', handleResize);
      
          // Clean up the event listener on unmount
          return () => window.removeEventListener('resize', handleResize);
        }, []);
      
        return isMobile;
    }
    
    const isMobile = useIsMobile();

    const handleTap = function () {
        setTapText('Yes!');
    }

    const handleClick = function () {
        setClickCount(clickCount + 1);

        if (clickCount > 0) {
            MyRouter.push('/yes') 
        }
        if (clickCount === 0) {
            handleTap()
        }
    }


    if (isMobile === true) {
        return (
            <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={() => {
                    handleClick()

                }}
            >
                {tapText}
            </a>

        )
    } else {
        return (
            <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={() => {
                    MyRouter.push('/yes')
                }}
            >
                {isHovering ? <span>Yes!</span> : <span>No</span>}
            </a>

        )
    }


}