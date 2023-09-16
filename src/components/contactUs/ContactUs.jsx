function ContactUs() {
  {/* TODO: Form submission handler */}
  const hideLabel = (event) => event.target.previousSibling.classList.add("hidden")
  const showLabel = (event) => event.target.previousSibling.classList.remove("hidden")
  return (
    <section className="my-6 md:my-10 px-5" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-atype md:font-atype -tracking-[2%] text-4xl md:text-5/4xl font-semibold">Contact Us</h2>
        <p className="my-5 md:text-lg font-satoshi">{`If you have any inquiries or require additional details, please don't hesitate to reach out to us using the form provided below.`}</p>
      </div>
      <form className="max-w-2xl mx-auto my-6 md:my-10 flex flex-col md:flex-row md:flex-wrap justify-center items-center">
        <div className="relative w-full md:w-[48%]">
          <label className="text-neutral-400 text-sm md:text-base font-satoshi absolute mt-3 ml-4" htmlFor="name">Name</label>
          <input id="name" className="py-3 px-4 rounded-lg border border-neutral-400 text-neutral-400 text-sm md:text-base font-satoshi w-full" onClick={hideLabel} onFocus={hideLabel} onBlur={showLabel} />
        </div>
        <div className="relative my-6 md:my-0 md:ml-6 w-full md:w-[48%]">
          <label className="text-neutral-400 text-sm md:text-base font-satoshi absolute mt-3 ml-4" htmlFor="input">Email address</label>
          <input id="email" className="py-3 px-4 rounded-lg border border-neutral-400 text-neutral-400 text-sm md:text-base font-satoshi w-full" onClick={hideLabel} onFocus={hideLabel} onBlur={showLabel} />
        </div>
        <div className="relative mb-6 md:my-8 w-full">
          <label className="text-neutral-400 text-sm md:text-base font-satoshi absolute mt-3 ml-4" htmlFor="message">Message</label>
          <textarea id="message" className="py-3 px-4 rounded-lg border border-neutral-400 text-neutral-400 text-sm md:text-base font-satoshi w-full" rows="10" onClick={hideLabel} onFocus={hideLabel} onBlur={showLabel} />
        </div>
        <button type="submit" className="mx-auto block py-4 px-10 bg-primary-200 hover:bg-primary-100 focus-visible:bg-primary-100 text-neutral-100 rounded-lg font-satoshi font-bold">Send Message</button>
      </form>
    </section>
  )
}

export default ContactUs;