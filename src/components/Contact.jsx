const container = `bg-gradient-to-b from-slate-950 to-slate-900 text-gray-200 p-2`
const wrapper = `flex flex-col gap-3 justify-center items-center my-3`
const title = `text-center text-amber-600 lg:text-4xl text-3xl font-bold`
const titleDesc = `text-center text-xl`
const contactForm = `flex flex-col gap-3 bg-gray-950 p-5 rounded-lg lg:w-1/2 w-full `
const contactTitle = 'text-amber-600 font-semibold ml-2 text-xl'
const inputStyle = `bg-gray-700 h-12 p-3 rounded-lg`
const inputStyleTextArea = 'bg-gray-700 p-3 rounded-lg'
const sendButton = `text-gray-950 font-semibold h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow hover:shadow-cyan-400`


function Contact() {

const formKey = import.meta.env.VITE_FORM_KEY
  return (
    <>
      <div name='contact' className={container}>
        <div className={wrapper}>
          <div className={title}>Contact Me</div>
          <div className={titleDesc}>Feel free to reach out to me for any queries</div>
          <form
            action={`https://getform.io/f/${formKey}`}
            method='POST'
            className={contactForm}
          >
            <div className={contactTitle}>Email Me</div>
            <input className={inputStyle} type="text" name='name' placeholder='Your Name'  />
            <input className={inputStyle} type="email" name='email' placeholder='Your Email' required/>
            <textarea className={inputStyleTextArea} name='message' rows={4} placeholder='Message'></textarea>
            <button className={sendButton} type='submit'>Send</button>
          </form>
          
        </div>
      </div>
    </>
  )
}

export default Contact