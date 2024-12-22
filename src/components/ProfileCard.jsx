import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/authSlice';

export default function ProfileCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  if (!user) return null;

  return (
    <div className="w-full max-w-md space-y-8 text-white">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl">Full Name :</h3>
          <p className="text-lg mt-1">{user.name}</p>
        </div>
        
        <div>
          <h3 className="text-xl">Email :</h3>
          <p className="text-lg mt-1">{user.email}</p>
        </div>

        <div>
          <h3 className="text-xl">Password :</h3>
          <p className="text-lg mt-1">••••••••</p>
        </div>

        <button
          onClick={handleLogout}
          className="w-32 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
}