import { projects } from '../data/Projects.js';

const container = 'bg-gradient-to-t from-slate-950 to-slate-900 text-gray-100 py-20 lg:px-10 px-5';
const wrapper = 'flex flex-col justify-center items-center gap-8';
const title = 'text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent';
const projectContainer = 'grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full mt-4';
const projectWrapper = 'bg-gray-950 flex flex-col gap-5 p-6 rounded-xl border border-cyan-800 hover:border-cyan-500 duration-500 shadow-md hover:shadow-cyan-400';
const imgWrapper = 'bg-gradient-to-l from-amber-600 to-lime-600 rounded-md p-1 hover:scale-105 duration-500';
const projectImgStyle = 'rounded-md w-full h-auto object-cover';
const nameDateWrapper = 'flex flex-col gap-1';
const nameStyle = 'text-amber-500 text-xl font-semibold';
const dateStyle = 'text-gray-500 text-sm';
const skillWrapper = 'flex flex-wrap gap-2';
const skillStyle = 'px-3 py-1 text-sm font-medium text-gray-900 bg-gradient-to-l from-amber-500 to-lime-500 rounded-full';
const descStyle = 'text-sm text-gray-300 leading-relaxed';
const btnWrapper = 'flex justify-between gap-3 pt-2';
const btnStyle = 'bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-950 font-semibold px-4 py-2 rounded-lg shadow hover:shadow-cyan-400 duration-300 text-sm';

function Projects() {
  return (
    <div name='projects' className={container}>
      <div className={wrapper}>
        <div className={title}>Projects</div>
        <div className={projectContainer}>
          {projects.map((item, index) => (
            <div className={projectWrapper} key={index}>
              <div className={imgWrapper}>
                <img className={projectImgStyle} src={item.img} alt={item.title} />
              </div>

              <div className={skillWrapper}>
                {item.skills.map((skill, i) => (
                  <span className={skillStyle} key={i}>{skill}</span>
                ))}
              </div>

              <div className={nameDateWrapper}>
                <div className={nameStyle}>{item.title}</div>
                <div className={dateStyle}>{item.date}</div>
              </div>

              <div className={descStyle}>{item.desc}</div>

              <div className={btnWrapper}>
                <a href={item.live} target='_blank'>
                  <button className={btnStyle}>Live Demo</button>
                </a>
                <a href={item.github} target='_blank'>
                  <button className={btnStyle}>GitHub Repo</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
