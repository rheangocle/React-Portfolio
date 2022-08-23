import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    setName("");
    setEmail("");
    setMessage("");
    alert(`Thank you for your message, ${name}!`);
  };
  return (
    <section id='contact' className='flex flex-wrap px-40 py-10'>
      <div className='flex-col'>
        <h2 className='text-black sm:text-4xl text-3xl mb-1 font-medium title-font'>
          Send me a message!
        </h2>
        <p className='leading-relaxed p-3'>
          Feel free to reach out to me for job inquiries or any other questions.
          Looking forward to hearing from you.
        </p>
      </div>
      <form
        name='contact'
        className='flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'
      >
        <div className='relative mb-4'>
          <label className='leading-7 text-sm text-stone-600'>Name</label>
          <input
            value={name}
            type='text'
            id='name'
            name='name'
            onChange={handleInputChange}
            className='w-full bg-slate-700 rounded border border-stone-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-stone-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>
        <div className='relative mb-4'>
          <label className='leading-7 text-sm text-stone-600'>Email</label>
          <input
            value={email}
            type='email'
            id='email'
            name='email'
            onChange={handleInputChange}
            className='w-full bg-slate-700 rounded border border-stone-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-stone-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>
        <div className='relative mb-4'>
          <label className='leading-7 text-sm text-stone-600'>Message</label>
          <textarea
            value={message}
            id='message'
            name='message'
            onChange={handleInputChange}
            className='w-full bg-slate-700 rounded border border-stone-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-stone-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
          />
        </div>
        <button
          type='button'
          onClick={handleFormSubmit}
          className='text-white border-0 py-2 px-6 focus:outline-none rounded text-lg bg-orange-400 hover:bg-slate-800 hover:text-white'
        >
          Submit
        </button>
      </form>
    </section>
  );
}
