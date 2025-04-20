'use client';

import { useEffect, useState } from 'react';

export default function DebugViewport() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();

    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="fixed top-2 left-2 z-[9999] bg-black/80 text-white text-xl px-3 py-2 rounded-lg shadow-lg pointer-events-none">
      Width: {width}px
    </div>
  );
}
