import React from 'react';
import LoginForm from '../molecules/LoginForm';

const LoginSection: React.FC = () => (
  <section className="flex flex-col items-center justify-center min-h-screen p-4">
    <div className="w-full max-w-md bg-gray-100 p-8 ">
      <h2 className="text-center text-2xl font-semibold mb-6">Login In</h2>
      <LoginForm />
    </div>
  </section>
);

export default LoginSection;