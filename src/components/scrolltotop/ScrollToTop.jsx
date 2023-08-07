import React, { useState, useEffect } from 'react';
import './scrolltotop.css';


const ScrollToTop = () => {
    const [scrollToTopButton, setScrollToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 500) {
                setScrollToTopButton(true)
            } else {
                setScrollToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return(<div className="bc__scrolltotop">
        {scrollToTopButton && (<button className='bc__scrolltotop-button' onClick={scrollUp}>^</button>)}
    </div>);
};

export default ScrollToTop;