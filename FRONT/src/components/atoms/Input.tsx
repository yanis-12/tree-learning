import React from 'react';

interface InputProps {
  placeholder: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, type = 'text' }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full px-4 py-2 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

export default Input;
