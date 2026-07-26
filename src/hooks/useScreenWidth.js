import { useEffect, useState } from 'react';
export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(window.screen.availWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); // Cleanup the listener on component unmount
  }, []);

  if (screenWidth < 600) {
    return 'mobile';
  } else if (screenWidth < 1024) {
    return 'tablet';
  } else {
    return 'desktop';
  }
}
