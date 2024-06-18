import { projects } from '../data/Projects.js'

const container = 'bg-gradient-to-t from-slate-950 to-slate-900 text-gray-100 py-20 lg:px-10 px-5';
const wrapper = 'flex flex-col justify-center items-center gap-6';
const title = 'text-3xl lg:text-4xl font-bold text-amber-500';
const subTitle = 'lg:text-2xl text-xl text-center';
const projectContainer = 'flex flex-wrap gap-12 md:grid grid-cols-2 lg:grid-cols-3 grid-rows-auto'
const projectWrapper = 'bg-gray-950 flex flex-col gap-6 py-10 px-7 rounded-lg border border-cyan-800  duration-500 shadow-md hover:shadow-cyan-500'
const imgWrapper = 'bg-gradient-to-l from-amber-600 to-lime-600 rounded p-px hover:scale-105 duration-500'
const projectImgStyle = 'rounded'
const nameDateWrapper = 'flex flex-col gap-1'
const nameStyle = 'text-amber-600 lg:text-2xl text-xl font-semibold'
const dateStyle = 'text-gray-400 text-sm'
const skillWrapper = 'flex flex-wrap gap-2'
const skillStyle = 'px-3 py-1 text-sm text-gray-950 bg-gradient-to-l from-amber-600 to-lime-600 rounded-full'
const btnWrapper = 'flex justify-between gap-4';
const btnSytle = 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow hover:shadow-cyan-400 duration-500 rounded-lg text-gray-950 lg:py-3 lg:px-5 px-4 py-2';


function Projects() {
  return (
    <div name='projects' className={container}>
      <div className={wrapper}>
        <div className={title}>Projects</div>
        <div className={subTitle}>Here is My Recent Projects defining Experience </div>
        <div className={projectContainer}>
          {
            projects.map((item, index) => {
              return (
                <div className={projectWrapper} key={index}>
                  <div className={imgWrapper}>
                    <img
                      className={projectImgStyle}
                      src={item.img}
                      alt="" />
                  </div>
                  <div className={skillWrapper}>
                    {
                      item.skills.map((skill, index) => (
                        <div className={skillStyle} key={index}> {skill} </div>
                      ))
                    }
                  </div>
                  <div className={nameDateWrapper}>
                    <div className={nameStyle}>{item.title} </div>
                    <div className={dateStyle} >{item.date} </div>
                  </div>
                  <div className=''>  {item.desc}  </div>
                  <div className={btnWrapper}>
                    <button className={btnSytle}> <a href={item.live} target='_blank'>Live Demo </a></button>
                    <button className={btnSytle}> <a href={item.github} target='_blank'>Github Repo</a></button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Projects