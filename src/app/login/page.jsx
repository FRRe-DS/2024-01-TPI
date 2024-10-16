'use client';
import { useState } from 'react';
import { connectUser } from '../lib/connectUser';
import {styles} from './styles.css'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [message, setMessage] = useState(null);
  const router = useRouter()

  const login = async (event) => {
    event.preventDefault();
    setMessage(null);
    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);

    const res = await connectUser(jsonData);

    if (res.error) {
      setMessage(res.error.message);
      return;
    }

    if (res.jwt && res.user) {
      setMessage('Inicio de sesion exitoso.');
      router.prefetch('/');
      router.replace('/');
    }
  };

  return (
    <form onSubmit={login}>
      <label htmlFor="identifier" className="block">Username/Email</label>
      <input type="text" id="identifier" name="identifier" className="block" />

      <label htmlFor="password" className="block">Password</label>
      <input type="password" id="password" name="password" className="block" />

      <button type="submit">Submit</button>

      <div className='message'>{ message }</div>
    </form>
  );
}