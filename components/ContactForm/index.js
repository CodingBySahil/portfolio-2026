'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill all fields.');
      return;
    }
    setStatus('Message sent (demo).');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <form 
      className="flex flex-col gap-3 max-w-2xl mx-auto md:flex-row md:flex-wrap md:justify-between" 
      onSubmit={handleSubmit} 
      aria-label='Contact form'
    >
      <label className="flex flex-col font-semibold text-slate-900 dark:text-white uppercase text-sm tracking-wide md:w-[48%]">
        Name
        <input 
          name='name' 
          value={form.name} 
          onChange={handleChange} 
          className="mt-1 px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors"
        />
      </label>
      
      <label className="flex flex-col font-semibold text-slate-900 dark:text-white uppercase text-sm tracking-wide md:w-[48%]">
        Email
        <input 
          name='email' 
          type='email' 
          value={form.email} 
          onChange={handleChange} 
          className="mt-1 px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors"
        />
      </label>
      
      <label className="flex flex-col font-semibold text-slate-900 dark:text-white uppercase text-sm tracking-wide w-full">
        Message
        <textarea 
          name='message' 
          value={form.message} 
          onChange={handleChange} 
          rows={5}
          className="mt-1 px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors"
        />
      </label>
      
      <button 
        type='submit' 
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-3 rounded-full uppercase text-sm tracking-wide hover:shadow-lg hover:-translate-y-1 transition-all duration-300 active:translate-y-0"
      >
        Send Message
      </button>
      
      {status && <p className="text-blue-600 dark:text-blue-400 text-sm mt-2">{status}</p>}
    </form>
  );
}
 