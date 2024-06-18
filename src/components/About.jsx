import React from 'react';
import pfp from '../assets/pfp.jpg';
import SagarikaResume from '../assets/SagarikaResume.pdf';
import { ReactTyped } from 'react-typed';
import { FaFileDownload, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Bio } from '../data/Bio';

const container = 'bg-gradient-to-b from-slate-950 to-slate-900 text-gray-100 text-xl p-8 md:px-24 md:py-20 flex flex-col md:flex-row-reverse gap-6 justify-center items-center';
const imgWrapper = 'relative flex-1 flex justify-center items-center'; // Added relative class
const imgStyle = 'rounded-full border border-lime-800 hover:border-lime-500 duration-500 transform hover:scale-105 w-5/6 lg:w-2/3';
const glowingBg = 'absolute inset-0 rounded-full bg-blue-500 opacity-50 blur-lg'; // Adjusted glowing background styles
const introAboutWrapper = 'flex flex-1 flex-col flex-wrap gap-8';
const introWrapper = 'flex flex-col gap-3';
const hiStyle = 'text-amber-500 text-2xl font-bold';
const nameStyle = 'text-amber-400 text-4xl font-bold';
const typedWrapper = 'text-xl font-semibold mt-2';
const aStyle = 'font-bold mr-2';
const typedStyle = 'text-2xl text-gray-950 p-1 px-4 rounded bg-gradient-to-l text-white';
const btnStyle = 'w-full md:w-2/5 bg-gradient-to-r from-cyan-500 to-blue-500 shadow hover:shadow-cyan-400 duration-500 text-gray-950 font-semibold rounded-lg p-2 px-5 transform hover:scale-105';
const linkStyle = 'flex justify-center items-center gap-3 transition duration-300 ease-in-out transform hover:scale-105 text-md';
const socialMediaWrapper = 'flex justify-center lg:justify-start items-start gap-1 lg:w-1/2';
const socialMediaIcon = 'ml-2 md:mx-2 hover:text-cyan-400 text-2xl w-10 transition duration-300 ease-in-out transform hover:scale-105';

function About() {
  return (
    <div name='about' className={container}>
      <div className={imgWrapper}>
        {/* Glowing background behind the image */}
        <div className={glowingBg}></div>
        <img
          className={imgStyle}
          src={pfp}
          alt={'myImage'}
          height={'300px'}
          width={'300px'}
        />
      </div>
      <div className={introAboutWrapper}>
        <div className={introWrapper}>
          <h1 className={hiStyle}> Hi, I am</h1>
          <h1 className={nameStyle}>Sagarika Sahoo</h1>
          <div className={typedWrapper}>
            <span className={aStyle}>a</span>
            <ReactTyped
              className={typedStyle}
              strings={Bio.roles}
              startDelay={100}
              typeSpeed={50}
              backDelay={2000}
              backSpeed={30}
              loop={true}
            />
          </div>
        </div>
        <div className='text-base lg:text-lg'> {Bio.description}</div>
        <div className='flex lg:flex-row flex-col gap-5 w-full'>
          <button className={btnStyle}>
            <a className={linkStyle} href={SagarikaResume} download='SagarikaResume.pdf' target="_blank">
              Download Resume <FaFileDownload/>
            </a>
          </button>
          <button className={btnStyle}>
            <a className={linkStyle} href={'https://drive.google.com/file/d/1-VFIKeBmhqMfQdn0mTeumSYTIXmfpYUu/view?usp=sharing'} target="_blank">
              View Resume <FaFileDownload/>
            </a>
          </button>
          </div>

          <div className={socialMediaWrapper}>
            <a className={socialMediaIcon} href={Bio.github} target='_blank'><FaGithub /></a>
            <a className={socialMediaIcon} href={Bio.linkedin} target='_blank'><FaLinkedin /></a>
            <a className={socialMediaIcon} href={Bio.twitter} target='_blank'><FaTwitter /></a>
          </div>
      </div>
    </div>
  )
}

export default About;
