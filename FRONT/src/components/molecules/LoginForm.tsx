import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const LoginForm: React.FC = () => (
  <form className="space-y-4">
    <Input placeholder="Email" type="email" />
    <Input placeholder="Mot de passe" type="password" />
    <div className="flex items-center">
      <input type="checkbox" id="keep-logged-in" className="mr-2" />
      <label htmlFor="keep-logged-in" className="text-sm">Keep me logged in</label>
    </div>
    <Button text="Se connecter" type="submit" />
    <p className="text-center text-sm">
      Mot de passe oublié? <a href="#" className="text-blue-600">Réinitialiser</a>
    </p>
  </form>
);

export default LoginForm;
