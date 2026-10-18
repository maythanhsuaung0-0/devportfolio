"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function CursorSparkles() {
  const canvasRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/studio")) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(any-pointer: fine)");
    if (!context) return;

    let particles = [];
    let previous = null;
    let latest = null;
    let frame = null;
    let step = 0;
    let width = 0;
    let height = 0;
    const styles = getComputedStyle(document.documentElement);
    const colors = [
      styles.getPropertyValue("--accent").trim(),
      styles.getPropertyValue("--project-rose").trim(),
    ];
    const isPopoverOpen = () =>
      typeof canvas.hidePopover === "function" &&
      canvas.matches(":popover-open");

    const reset = () => {
      cancelAnimationFrame(frame);
      frame = null;
      particles = [];
      previous = latest = null;
      context.clearRect(0, 0, width, height);
    };

    const resize = () => {
      reset();
      width = window.innerWidth;
      height = window.innerHeight;
      const scale = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * scale);
      canvas.height = Math.round(height * scale);
      context.setTransform(scale, 0, 0, scale, 0, 0);
    };

    // A manual popover keeps this noninteractive layer above fullscreen project dialogs.
    const raise = () => {
      if (motion.matches || !pointer.matches || document.hidden) {
        reset();
        if (isPopoverOpen()) canvas.hidePopover();
        return;
      }
      if (typeof canvas.showPopover === "function") {
        if (isPopoverOpen()) canvas.hidePopover();
        canvas.showPopover();
      }
    };

    const emit = (x, y, now) => {
      const ripple = step++ % 4 === 0;
      particles.push({
        x: x + (ripple ? 0 : (Math.random() - 0.5) * 14),
        y: y + (ripple ? 0 : (Math.random() - 0.5) * 14),
        born: now,
        life: ripple ? 1000 : 780,
        size: 4 + Math.random() * 4,
        drift: (Math.random() - 0.5) * 10,
        color: colors[step % colors.length],
        ripple,
      });
    };

    const draw = (now) => {
      frame = null;
      if (latest) {
        const start = previous || latest;
        const distance = Math.hypot(latest.x - start.x, latest.y - start.y);
        if (!previous || distance >= 10) {
          const count = Math.min(8, Math.max(1, Math.floor(distance / 10)));
          for (let i = 1; i <= count; i++) {
            emit(
              start.x + ((latest.x - start.x) * i) / count,
              start.y + ((latest.y - start.y) * i) / count,
              now,
            );
          }
          previous = latest;
        }
        latest = null;
      }
      context.clearRect(0, 0, width, height);
      particles = particles
        .filter((particle) => now - particle.born < particle.life)
        .slice(-96);
      particles.forEach((particle) => {
        const progress = (now - particle.born) / particle.life;
        const fade = Math.sin(Math.PI * progress) * (1 - progress);
        const x = particle.x + particle.drift * progress;
        const y = particle.y - progress * 8;
        context.strokeStyle = particle.color;
        context.globalAlpha = fade * (particle.ripple ? 0.28 : 0.52);
        context.lineWidth = particle.ripple ? 1 : 1.3;
        context.beginPath();
        if (particle.ripple) {
          const radius = 5 + progress * 40;
          context.ellipse(x, y, radius, radius * 0.65, -0.4, 0, Math.PI * 2);
        } else {
          const size = particle.size * Math.sin(Math.PI * progress);
          context.moveTo(x - size, y);
          context.lineTo(x + size, y);
          context.moveTo(x, y - size);
          context.lineTo(x, y + size);
        }
        context.stroke();
      });
      context.globalAlpha = 1;
      if (particles.length) frame = requestAnimationFrame(draw);
    };

    const move = (event) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
      if (motion.matches || !pointer.matches || document.hidden) return;
      latest = { x: event.clientX, y: event.clientY };
      if (frame === null) frame = requestAnimationFrame(draw);
    };
    const leave = () => {
      previous = latest = null;
    };
    const toggle = (event) => {
      if (event.target instanceof HTMLDialogElement) {
        reset();
        raise();
      }
    };

    resize();
    raise();
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("blur", reset);
    document.documentElement.addEventListener("pointerleave", leave);
    document.addEventListener("toggle", toggle, true);
    document.addEventListener("visibilitychange", raise);
    motion.addEventListener("change", raise);
    pointer.addEventListener("change", raise);

    return () => {
      reset();
      if (isPopoverOpen()) canvas.hidePopover();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("resize", resize);
      window.removeEventListener("blur", reset);
      document.documentElement.removeEventListener("pointerleave", leave);
      document.removeEventListener("toggle", toggle, true);
      document.removeEventListener("visibilitychange", raise);
      motion.removeEventListener("change", raise);
      pointer.removeEventListener("change", raise);
    };
  }, [pathname]);

  return (
    <canvas
      ref={canvasRef}
      className="cursor-sparkles"
      popover="manual"
      aria-hidden="true"
    />
  );
}
