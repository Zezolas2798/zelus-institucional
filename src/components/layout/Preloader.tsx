"use client";

import { useState, useEffect, useRef } from "react";
import anime from "animejs";

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const logoRef = useRef<SVGSVGElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Flag global para evitar re-execução em navegação client-side do Next.js
    const win = window as any;
    if (typeof window !== "undefined" && win.__ZELUS_PRELOADER_PLAYED__) {
      setIsVisible(false);
      return;
    }

    if (!logoRef.current || !preloaderRef.current) return;

    // Reset styles for animation
    const paths = logoRef.current.querySelectorAll("path");
    paths.forEach((path) => {
      path.style.strokeDasharray = "2000";
      path.style.strokeDashoffset = "2000";
      path.style.fill = "rgba(254, 97, 94, 0)";
    });

    const tl = anime.timeline({
      easing: 'easeInOutQuart'
    });

    tl
      .add({
        targets: paths,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 1200,
        delay: anime.stagger(150)
      })
      .add({
        targets: paths,
        fill: ['rgba(254, 97, 94, 0)', 'rgba(254, 97, 94, 1)'],
        strokeWidth: 0,
        duration: 600,
        offset: '-=400'
      })
      .add({
        targets: logoRef.current,
        duration: 1200,
        easing: 'easeInOutExpo',
        begin: () => {
          const navLogo = document.querySelector('.zelus-icon-only');
          if (navLogo) {
            const rect = navLogo.getBoundingClientRect();
            // Calcula o centro da tela
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            // Calcula o centro da logo de destino
            const targetX = rect.left + (rect.width / 2);
            const targetY = rect.top + (rect.height / 2);

            anime({
              targets: logoRef.current,
              translateX: targetX - centerX,
              translateY: targetY - centerY,
              scale: rect.width / 150, // 150 é o tamanho base definido no CSS original
              duration: 1200,
              easing: 'easeInOutExpo'
            });

            anime({
              targets: preloaderRef.current,
              opacity: 0,
              duration: 800,
              delay: 400,
              easing: 'linear',
              complete: () => {
                (window as any).__ZELUS_PRELOADER_PLAYED__ = true;
                setIsVisible(false);
              }
            });
          } else {
            anime({
              targets: preloaderRef.current,
              opacity: 0,
              duration: 1000,
              easing: 'linear',
              complete: () => {
                (window as any).__ZELUS_PRELOADER_PLAYED__ = true;
                setIsVisible(false);
              }
            });
          }
        }
      });

    // Fail-safe absoluto: 5s
    const failSafe = setTimeout(() => {
      if (typeof window !== "undefined") {
        (window as any).__ZELUS_PRELOADER_PLAYED__ = true;
      }
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(failSafe);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      id="preloader"
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#080808]"
    >
      <svg 
        id="anim-logo" 
        ref={logoRef}
        className="w-[150px] h-auto z-[10000]" 
        viewBox="0 0 358 364" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="#fe615e"
          strokeWidth="2"
          d="M35.43,218.33c4.01,22.75,15.3,41.45,29.93,58.34,31.65,38.72,77.73,58.52,128.46,53.71,44.96-4.14,87.71-31.45,111.78-72.27,26-20.69,39.54-48.61,48.02-82.07,4.74,68.93-36.57,133.17-95.83,164.62-56.31,30.03-124.26,25.54-176.24-11.33-33.99-23.59-59.01-58.03-71.15-97.73-6.65-22.7-1.74-44.91,7.91-66.18,21.66-43.33,63.67-69.98,112.44-74.56l162.03-.16-47.83,71.25c-19.92,24.67-44.44,43.72-74.3,59.99l68.48-101.56-109.52-.09c-24.29,3.31-47.17,10.01-64.66,26.39-20.35,18.55-32.4,43.53-29.5,71.64Z" 
        />
        <path
          stroke="#fe615e"
          strokeWidth="2"
          d="M187.54,140.84l-68.89,102.67,103.39-.1c36.22-2.48,69.11-17.49,88.06-48.03,17.04-26.27,16.07-57.08-.01-83.39-25.58-46.5-72.24-77.73-124.96-78.66-53.92-2.83-104.31,24.08-132.11,70.69-27.52,21.15-42.43,51.66-48.66,86.31C-.22,140.43,20.71,91.06,55.35,56.11,120.15-10.49,223.96-14.3,293.37,47.37c26.63,23.18,46.09,54.41,55.28,89.19,4.58,22.99-1.28,44.75-11.76,65.22-25.23,44.83-72.08,70.84-123.46,70.84l-148.81.77,53.7-79.18c18.92-22.29,42.86-39.82,69.23-53.36Z" 
        />
      </svg>
    </div>
  );
}
