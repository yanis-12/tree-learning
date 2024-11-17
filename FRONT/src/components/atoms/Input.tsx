import React from 'react';

interface InputProps {
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Typage pour 'onChange'
}

const Input: React.FC<InputProps> = ({ placeholder, type = 'text', value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value} 
    onChange={onChange} 
    className="w-full px-4 py-2 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);


export default Input;
