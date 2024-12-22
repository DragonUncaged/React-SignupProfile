import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignupForm from '../components/SignupForm';
import Header from '../components/Header';

export default function SignupPage() {
  const navigate = useNavigate();
  const { isAuthenticated, error, success } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Signup</h2>
          {error && (
            <div className="mb-4 p-4 text-red-500">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-4 text-green-500">
              {success}
            </div>
          )}
          <SignupForm />
        </div>
      </div>
    </div>
  );
}