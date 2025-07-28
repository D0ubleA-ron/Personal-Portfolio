'use client';

import { motion } from 'framer-motion';
import { Layout, GitHub, Youtube } from 'react-feather';

export default function Projects() {
    const projects = [
        {
            title: "Jumpseat (In-Development) ",
            description: "Jumpseat allows users to find flight deals given their personal criteria. While most travel sites require strict parameters to search for trips, Jumpseat helps you find trips based on what you value. Wether it's searching by price or by location, Jumpseat can help!",
            tags: ["Django, Tailwind CSS, MySQL, Docker"],
            project_site: "https://jumpseat-production.up.railway.app/",
            github: "https://github.com/D0ubleA-ron/Jumpseat"
        },
        {
            title: "AI Insurance Policy Checker",
            description: "The Insurance Policy Checker was made for BFL Canada and is designed to take expiring and renewal insurance policies and compare them using OCR and highlight the differences. The tool includes a company wide team functionality and stats graphs using React charts.",
            tags: ["React, Flask, Tailwind CSS, Tesseract OCR, MySQL, Docker, Jest, PyTest"],
            youtube: "https://youtu.be/X3G9LBB-xNk",
            warning: "GitHub Unavailable Due to NDA",
            
        },
        {
            title: "Healthenow.com",
            description: "Healthenow is a website I developed in partnership with Dr. Barbara Marcolin to allow healthcare professionals to communicate with patients and vice versa. I also developed a sub-project that allows for residents along the Okanagan Rail Trail to donate and receive items.",
            tags: ["Django, Tailwind CSS, MySQL, Docker"],
            warning: "GitHub Unavailable Due to NDA",
            project_site: "https://healthenow.com",
        },

        
        {
            title: "Squid Game Robot",
            description: "This project recreates the Red Light, Green Light game inspired by Squid Games. It leverages the YOLOv8n model and is designed to run on a Raspberry Pi or a local device. The project not only serves as an interactive game but also demonstrates real-time video processing and human motion detection.",
            tags: ["Raspberry Pi 4, YOLOv8n, Python"],
            github: "https://github.com/D0ubleA-ron/RedLight_GreenLight",
            youtube: "https://www.youtube.com/watch?v=2emOTJnwu4c"
        },
         {
            title: "Maize Sweeper",
            description: "This project recreates the classic Minesweeper game with a twist. As a crow stuck in a maze you must dodge the scarecrows!",
            tags: ["C#, Unity Game Engine"],
            github: "https://github.com/ved-b/MaizeSweeper?tab=readme-ov-file",
            project_site: "https://ved123.itch.io/maizesweeper"
        }
        
    ];

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2, 
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    };

  return (
    <section className="bg-[#014421] px-4 py-10 sm:px-10 sm:py-16 md:px-20 md:py-20" id="projects">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-white text-3xl font-bold mb-4">Projects</h2>

        <motion.div 
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.3}}
        >
          {projects.map((project, index) => (
            <motion.div 
                key={index} 
                className="bg-[#011744] text-white p-6 rounded-lg shadow hover:shadow-lg transition will-change-transform"
                variants={cardVariants}
            >
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4 break-words">{project.description}</p>
                <p className="text-sm text-gray-300 mb-4 break-words">{project.warning}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-#011344 text-xs rounded-full font-extralight italic">{tag}</span>
                ))}
                </div>
                
                <div className='mb-2 flex space-x-4'>
                {/* Project Website Link (only if exists) */}
                    {project.project_site && (
                        <a 
                        href={project.project_site} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block text-sm text-white hover:underline"
                        >
                            <Layout className="hover:text-blue-300 "/>
                        </a>
                    )}

                    {/* GitHub Link (only if exists) */}
                    {project.github && (
                        <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block text-sm text-white hover:underline"
                        >
                            <GitHub className="hover:text-purple-600"/>
                        </a>
                    )}

                    {project.youtube && (
                        <a 
                        href={project.youtube} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block text-sm text-white hover:underline"
                        >
                            <Youtube className="hover:text-red-600"/>
                        </a>
                    )}

                </div>
                
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}