import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser, setError } from '../store/authSlice';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      dispatch(setError('All fields are required'));
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      dispatch(setError('Passwords do not match'));
      return;
    }

    const user = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      accessToken: Math.random().toString(36).substring(2),
    };

    localStorage.setItem('user', JSON.stringify(user));
    dispatch(setUser(user));
    navigate('/profile');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full bg-black text-white border-b border-white focus:border-white focus:outline-none px-2 py-1"
          placeholder="Full Name"
        />
      </div>

      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full bg-black text-white border-b border-white focus:border-white focus:outline-none px-2 py-1"
          placeholder="Email"
        />
      </div>

      <div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full bg-black text-white border-b border-white focus:border-white focus:outline-none px-2 py-1"
          placeholder="Password"
        />
      </div>

      <div>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="mt-1 block w-full bg-black text-white border-b border-white focus:border-white focus:outline-none px-2 py-1"
          placeholder="Confirm Password"
        />
      </div>

      <button
        type="submit"
        className="w-32 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors"
      >
        Signup
      </button>
    </form>
  );
}