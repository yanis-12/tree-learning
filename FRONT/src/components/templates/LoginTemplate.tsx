import React from 'react';
import LoginSection from '../organisms/LoginSection';

const LoginTemplate: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-gray-100">
    <header className="bg-black text-white py-4">
      <h1 className="text-center text-xl font-semibold">Tree Learning</h1>
    </header>
    <main className="flex-grow grid grid-cols-1 md:grid-cols-2">
      {/* Section de connexion à gauche */}
      <div className="flex justify-center items-center p-8">
        <LoginSection />
      </div>
      {/* Section Company Logo à droite */}
      <div className="flex flex-col justify-center items-center p-8">
        <div className="bg-gray-100p-8 text-center">
          <h2 className="text-lg font-semibold">Company Logo</h2>
          <p className="text-gray-600 mt-4">
            Here you can include additional information about the company or relevant content.
          </p>
        </div>
      </div>
    </main>
  </div>
);

export default LoginTemplate;
