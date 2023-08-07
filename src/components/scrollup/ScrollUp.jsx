import { useEffect } from 'react';
import './scrollup.css';


const ScrollUp = () => {
    useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), [])

    return null
};

export default ScrollUp;