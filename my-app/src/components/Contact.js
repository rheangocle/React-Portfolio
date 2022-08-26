import React, { useState } from "react";

const styles = {
  background: {
    background: "white",
    color: "black",
  },
  input: {
    background: "#f87749",
  },
  button: {
    background: "#f87749",
  },
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
    alert(`Thank you for your message, ${name}!`);
  };
  return (
    <section
      id='contact'
      style={styles.background}
      className='justify-center flex flex-wrap px-10 py-20'
    >
      <form
        name='contact'
        className='lg:w-1/2 sm:w-full  flex flex-col justify-center'
      >
        <h2 className='pb-3 font-heading font-bold sm:text-4xl lg:text-6xl title-font'>
          Send me a message!
        </h2>
        <p className='leading-relaxed '>
          Feel free to reach out to me for job inquiries or any other questions!
        </p>
        <label className='leading-7 text-sm text-black'>Name</label>
        <input
          value={name}
          type='text'
          id='name'
          name='name'
          onChange={handleInputChange}
          className='w-full bg-slate-800 rounded border border-stone-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-stone-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        />

        <div className='pb-4'>
          <label className='leading-7 text-sm text-black'>Email</label>
          <input
            value={email}
            type='email'
            id='email'
            name='email'
            onChange={handleInputChange}
            className='w-full bg-slate-800 rounded border border-stone-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-stone-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>
        <div className='pb-4'>
          <label className='leading-7 text-sm text-black'>Message</label>
          <textarea
            value={message}
            id='message'
            name='message'
            onChange={handleInputChange}
            className='w-full bg-slate-800 rounded border border-stone-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-stone-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
          />
        </div>
        <button
          type='button'
          onClick={handleFormSubmit}
          className='text-white border-0 p-3 bg-black focus:outline-none rounded text-lg hover:bg-orange-400 hover:text-white'
        >
          Submit
        </button>
      </form>
    </section>
  );
}
