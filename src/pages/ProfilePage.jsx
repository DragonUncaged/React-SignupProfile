import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileCard from '../components/ProfileCard';
import Header from '../components/Header';

export default function ProfilePage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Profile</h2>
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}