import React, { useRef, useEffect } from "react";

// Animated starry background (twinkle + subtle movement)
const STAR_COUNT = 90;
const COLORS = ["#fff", "#bae6fd", "#a5b4fc", "#f0abfc"];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const StarryBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", resize);
    resize();

    // Generate stars
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: randomBetween(0.7, 1.8),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      speed: randomBetween(0.02, 0.08),
      twinkle: Math.random() * Math.PI * 2,
      drift: randomBetween(-0.08, 0.08),
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const now = Date.now() / 1000;
      for (let s of stars) {
        // Twinkle
        const tw = 0.7 + 0.5 * Math.sin(now * 2 + s.twinkle);
        // Subtle drift
        s.x += s.drift * 0.2;
        s.y += s.speed * 0.2;
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y > height) s.y = 0;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * tw, 0, 2 * Math.PI);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = 0.7 + 0.3 * Math.sin(now * 2 + s.twinkle);
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      ctx.globalAlpha = 1;
    }

    function animate() {
      draw();
      animationId = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none select-none"
      style={{ background: "linear-gradient(135deg, #0f2027 0%, #2c5364 100%)" }}
    />
  );
};

export default StarryBg;
