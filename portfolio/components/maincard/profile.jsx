'use client'; // Needed if you're using Next.js App Router

import { motion } from 'framer-motion';
import { Instagram, Linkedin, GitHub } from 'react-feather';

export default function AboutSection(){

    return(
        <motion.section
            id="about"
            className="bg-[#f5f5dc] px-6 py-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="flex flex-col md:flex-row justify-between gap-10 max-w-7xl mx-auto items-center">
                {/* Personal Info on the left */}
                <div className="flex-1 space-y-4">
                    {/* Info */}
                    <div className="space-y-4">

                        <div className="flex justify-between border-b border-gray-300 pb-2">
                            <span className="text-black font-semibold">Name:</span>
                            <span className="text-[#333333]">Aaron Deo</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-300 pb-2">
                            <span className="text-black font-semibold">Age:</span>
                            <span className="text-[#333333]">23</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-300 pb-2">
                            <span className="text-black font-semibold">Location:</span>
                            <span className="text-[#333333]">Vancouver, Canada</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-300 pb-2">
                            <span className="text-black font-semibold">School:</span>
                            <span className="text-[#333333]">University of British Columbia</span>
                        </div>

                    </div>

                    {/* Socials */}
                    <div className="flex space-x-6 text-gray-700 text-2xl">
                        <a href="https://www.instagram.com/doublea._.ron/" target="_blank" rel="noopener noreferrer">
                            <Instagram className="hover:text-blue-300 " />
                        </a>
                        <a href="https://www.linkedin.com/in/aaron-deo/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="hover:text-blue-600" />
                        </a>
                        <a href="https://github.com/D0ubleA-ron" target="_blank" rel="noopener noreferrer">
                            <GitHub className="hover:text-purple-600" />
                        </a>
                    </div>
                </div>

                {/* Right: Bio + Resume */}
                <div className="flex-1 space-y-6">
                <div className="text-[#333333]">
                    <h2 className="text-2xl font-semibold mb-2">A bit about me...</h2>
                    <p className="mb-4">
                    I am a recent Computer Science graduate from the University of British Columbia. I enjoy learning about new technologies and developing applications in React, Python, Tailwind and MySQL and more!
                    </p>
                    
                    <p className="mb-4">
                    My first internship was at Farm Credit Canada as a Software Developer. I gained lots of experience working with Java and SpringBoot. I also learnt a lot about the finance and agriculture industry. As someone with no previous experience in either of these, it was super cool!
                    </p>

                    <p className="mb-4">
                    My second internship was at the University of British Columbia as an Associate Business Analyst, working on the Workday Student ERP implementation. I made configurations to key UBC business areas, contributing to the Go Live in February 2024. 
                    </p>

                    <p className="mb-4">
                    My most recent work experience was working as a Full-Stack Developer for the University of British Columbia on a medical research project that allowed healthcare professionals to communicate with patients and vice-versa. 
                    </p>

                    <p className="mb-4">
                    Outside of coding, I enjoy playing hockey, disc golf and participating in hackathons. Feel free to reach out!                     
                    </p>
                </div>


                <a 
                    href='/Aaron Deo Resume.pdf'
                    download
                    className="border text-[#333333] px-6 py-3 hover:bg-blue-200 transition cursor-pointer font-bold"
                >
                    Download Resume
                </a>
                </div>
            </div>
        </motion.section>
    )
}