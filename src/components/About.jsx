import pfp from '../assets/pfp.jpg';
import SagarikaResume from '../assets/SagarikaResume.pdf';
import { ReactTyped } from 'react-typed';
import { FaEye, FaFileDownload, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Bio } from '../data/Bio';

const container = 'bg-gradient-to-b from-slate-950 to-slate-900 text-gray-100 text-xl p-4 lg:px-24 lg:py-20 flex flex-col md:flex-row-reverse gap-6 justify-center items-center';
const imgWrapper = 'relative flex-1 flex justify-center items-center'; // Added relative class
const imgStyle = 'rounded-full border border-lime-800 hover:border-lime-500 duration-500 transform hover:scale-105 w-4/5 lg:w-2/3';
const glowingBg = 'absolute inset-0 rounded-full bg-blue-800 opacity-40 blur-lg'; // Adjusted glowing background styles
const introAboutWrapper = 'flex flex-1 flex-col gap-8 lg:pl-12'; // Added left padding on larger screens
const introWrapper = 'flex flex-col gap-3';
const hiStyle = 'text-amber-500 lg:text-2xl text-xl font-bold';
const nameStyle = 'text-amber-400 lg:text-4xl  text-2xl font-bold';
const typedWrapper = 'text-xl font-semibold mt-2';
const aStyle = 'font-bold mr-2';
const typedStyle = 'text-2xl text-gray-950 p-1 px-4 rounded bg-gradient-to-l text-white';
const btnStyle = 'md:w-2/5 bg-gradient-to-r from-cyan-500 to-blue-500 shadow hover:shadow-cyan-400 duration-500 text-gray-950 font-semibold rounded-lg p-3 w-full transform hover:scale-105 ';
const linkStyle = 'flex justify-center items-center gap-3 transition duration-300 ease-in-out transform hover:scale-105 lg:text-lg text-sm';
const socialMediaWrapper = 'flex justify-center lg:justify-start items-center gap-5 lg:w-1/2'; // Increased gap for social icons
const socialMediaIcon = 'text-4xl text-gray-400 hover:text-cyan-400 transition duration-300 ease-in-out transform hover:scale-125';

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
              typeSpeed={80}
              backDelay={2000}
              backSpeed={40}
              loop={true}
            />
          </div>
        </div>
        <p className='text-lg text-gray-300'>{Bio.description}</p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <button className={btnStyle}>
            <a className={linkStyle} href={'https://drive.google.com/file/d/1-VFIKeBmhqMfQdn0mTeumSYTIXmfpYUu/view?usp=sharing'} target="_blank" rel="noopener noreferrer">
              <FaEye className='mr-2'/> View Resume
            </a>
          </button>
        </div>

        <div className={socialMediaWrapper}>
          <a href={Bio.github} target='_blank' rel="noopener noreferrer" className={socialMediaIcon} title="GitHub"><FaGithub /></a>
          <a href={Bio.linkedin} target='_blank' rel="noopener noreferrer" className={socialMediaIcon} title="LinkedIn"><FaLinkedin /></a>
          <a href={Bio.x} target='_blank' rel="noopener noreferrer" className={socialMediaIcon} title="Twitter"><FaTwitter /></a>
        </div>
      </div>
    </div>
  )
}

export default About;
