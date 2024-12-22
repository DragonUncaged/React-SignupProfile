import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Header</div>
        <nav>
          {!isAuthenticated ? (
            <Link to="/" className="text-white hover:text-gray-300">Signup</Link>
          ) : (
            <Link to="/profile" className="text-white hover:text-gray-300">Profile</Link>
          )}
        </nav>
      </div>
    </header>
  );
}