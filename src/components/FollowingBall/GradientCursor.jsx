"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GradientCursor({ isActive, isLoading }) {
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const circles = useRef([]);
  // const size = isActive ? 400 : 10;
  const delay = isActive ? 0.015 : 0.005;

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;

    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };

    moveCircles(delayedMouse.current.x, delayedMouse.current.y);

    rafId.current = window.requestAnimationFrame(animate);
  };

  const moveCircles = (x, y) => {
    const cursor = circles.current;
    gsap.set(cursor, { x, y, xPercent: -50, yPercent: -50 });
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.cancelAnimationFrame(rafId.current);
    };
  }, [isActive]);

  return (
    <div className="relative h-screen z-50">
      <div
        style={{
          width: isActive ? "200px" : "10px",
          height: isActive ? "200px" : "10px",
        }}
        className="top-0 left-0 fixed rounded-full mix-blend-difference opacity-35"
        ref={circles}
      >
        <div
          style={{
            filter: `blur(${50}px)`,
          }}
          className="absolute bg-orange-100 w-full h-full rounded-full"
        />
        <div
          style={{
            filter: `blur(${40}px)`,
          }}
          className="absolute bg-pink-600 w-full h-full rounded-full"
        />
        <div
          style={{
            filter: `blur(${30}px)`,
          }}
          className="absolute bg-red-400 w-full h-full rounded-full"
        />
      </div>
    </div>
  );
}
