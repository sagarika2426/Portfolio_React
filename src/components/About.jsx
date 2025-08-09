import React, { useState, useEffect } from 'react';
import { Eye, Github, Linkedin, Twitter, MapPin, Mail, Palette } from 'lucide-react';
import pfp from '../assets/pfp.png';


const Bio = {
  name: "Sagarika Sahoo",
  title: "Software Developer",
  location: "Mumbai, India",
  email: "sagarikasahoo16@gmail.com",
  experience: "1+ Years",
  description: "Passionate frontend developer with a keen eye for design and user experience. I love creating beautiful, functional web applications that solve real-world problems. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.",
  skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Node.js"],
  github: "https://github.com/sagarika2426",
  linkedin: "https://www.linkedin.com/in/sagarika2412/",
  twitter: "https://x.com/_Sagarika_Sahoo",
  resume: "https://drive.google.com/file/d/10qFkLHW-XBIIA6YH80vP9bKrdWqjL5C2/view?usp=sharing"
};


const typingTexts = [
  'Frontend Developer',
  'Software Developer', 
  'UI Explorer'
];

export default function About() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = typingTexts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % typingTexts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  const socialLinks = [
    { icon: Github, href: Bio.github, label: "GitHub" },
    { icon: Linkedin, href: Bio.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: Bio.twitter, label: "Twitter" }
  ];

  return (
<section className="min-h-[80vh] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Effects */}
    <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1000ms'}} />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
  </div>

  <div className="relative  container mx-auto px-10 py-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Profile Section */}
      <div className="flex flex-col items-center lg:items-start space-y-6">
            {/* Profile Image */}
            <div className="relative group">
<div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative">
                <img
                  src={pfp}
                  alt="Sagarika Sahoo"
                  width={300}
                  height={300}
                  className="rounded-full border-4 border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:scale-105 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Location</p>
                <p className="font-semibold text-white">{Bio.location}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:scale-105 transition-transform duration-300">
                <Mail className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Experience</p>
                <p className="font-semibold text-white">{Bio.experience}</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500" />
                <span className="text-cyan-400 font-medium">Hello, I'm</span>
              </div>

              <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
                {Bio.name}
              </h1>

              <div className="flex items-center gap-2 text-xl lg:text-xl text-gray-300">
                <span>I'm a</span>
                <span className="text-cyan-400 font-semibold min-w-[200px]">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-md leading-relaxed max-w-2xl">
              {Bio.description}
            </p>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Palette className="w-5 h-5 text-cyan-400" />
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {Bio.skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors px-3 py-1 rounded-full text-sm font-medium hover:scale-105 duration-200"
                    style={{animationDelay: `${0.1 * index}s`}}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{Bio.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{Bio.location}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href={Bio.resume} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Resume
              </a>

              <button className="inline-flex items-center px-6 py-3 border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 rounded-lg font-semibold">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-110 hover:-translate-y-0.5"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}