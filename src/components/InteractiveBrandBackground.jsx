import { useEffect } from 'react';

export function InteractiveBrandBackground() {
  useEffect(() => {
    let frameId = 0;

    const updatePosition = (event) => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 24;
        const y = (event.clientY / window.innerHeight - 0.5) * 24;
        document.documentElement.style.setProperty('--brand-shift-x', `${x.toFixed(2)}px`);
        document.documentElement.style.setProperty('--brand-shift-y', `${y.toFixed(2)}px`);
        document.documentElement.style.setProperty('--brand-shift-x-soft', `${(-x * 0.55).toFixed(2)}px`);
        document.documentElement.style.setProperty('--brand-shift-y-soft', `${(-y * 0.45).toFixed(2)}px`);
        document.documentElement.style.setProperty('--brand-rotate', `${(x * 0.06).toFixed(2)}deg`);
      });
    };

    window.addEventListener('pointermove', updatePosition, { passive: true });

    return () => {
      window.removeEventListener('pointermove', updatePosition);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      document.documentElement.style.removeProperty('--brand-shift-x');
      document.documentElement.style.removeProperty('--brand-shift-y');
      document.documentElement.style.removeProperty('--brand-shift-x-soft');
      document.documentElement.style.removeProperty('--brand-shift-y-soft');
      document.documentElement.style.removeProperty('--brand-rotate');
    };
  }, []);

  return (
    <div className="brand-atmosphere" aria-hidden="true">
      <div className="brand-atmosphere__line-rose" />
      <div className="brand-atmosphere__rose-mark" />
    </div>
  );
}