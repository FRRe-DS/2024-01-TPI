'use client';
import { useState } from 'react';
import {postUser} from '../lib/connectUser';
import {styles} from '../login/styles.css'
import { useRouter } from 'next/navigation';

export default function Registration() {
  const router = useRouter();
  const [message, setMessage] = useState(null);

  const register = async (event) => {
    event.preventDefault();
    setMessage(null);

    
    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);

    const res = await postUser(jsonData);

    if (res.error) {
      setMessage(res.error.message);
      return;
    }

    if (res.jwt && res.user) {
      setMessage('Successfull registration.');
      router.push('/login');
    }
  };

  return (
    <form onSubmit={register}>
      <label htmlFor="username" className="block">Username</label>
      <input type="text" id="username" name="username" className="block" />

      <label htmlFor="email" className="block">Email</label>
      <input type="email" id="email" name="email" className="block mb-2" />

      <label htmlFor="password" className="block">Password</label>
      <input type="password" id="password" name="password" className="block" />

      <button type="submit">Submit</button>

      <div>{ message }</div>
    </form>
  );
}