'use client';

import { useState } from 'react';
import styles from './contactForm.module.scss';

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
    <form className={styles.form} onSubmit={handleSubmit} aria-label='Contact form'>
      <label>
        Name
        <input name='name' value={form.name} onChange={handleChange} />
      </label>
      <label>
        Email
        <input name='email' type='email' value={form.email} onChange={handleChange} />
      </label>
      <label>
        Message
        <textarea name='message' value={form.message} onChange={handleChange} rows={5} />
      </label>
      <button type='submit' className={styles.submit}>Send Message</button>
      {status && <p className={styles.status}>{status}</p>}
    </form>
  );
}
 