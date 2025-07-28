'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';


export default function HeroSection() {
    
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 175]);

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/background.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#f5f5dc] px-6 font-roboto">
        <h1 className="text-4xl font-bold">Hi, I’m Aaron Deo</h1>
        <p className="mt-4 text-lg">Full Stack Developer | Passionate about building tech that helps people</p>
        <a href="#about" className="mt-8 bg-white text-black rounded-full px-6 py-2 hover:bg-gray-300 transition cursor-pointer">
          Learn More About Me
        </a>    
      </div>
    </section>
  );
}
