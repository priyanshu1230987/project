import { useEffect, useRef } from 'react';

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;
      color: string;
    }> = [];

    for (let i = 0; i < 200; i++) {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        color: `rgb(${r},${g},${b})`
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw milky way gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(30, 41, 59, 0.1)');
      gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.05)');
      gradient.addColorStop(1, 'rgba(147, 51, 234, 0.1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and animate stars
      stars.forEach(star => {
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.1) {
          star.twinkleSpeed *= -1;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color.replace('rgb', 'rgba').replace(')', `,${Math.max(0.1, Math.min(1, star.opacity))})`);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.8) 0%, rgba(0, 0, 0, 1) 100%)' }}
    />
  );
};

export default StarField;