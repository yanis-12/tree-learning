import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import du hook pour la navigation
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { useLoginMutation } from '../../api/endpoints/auth'; // Mutation d'authentification
import { useDispatch } from 'react-redux';
import { setToken } from '../../store/slices/authSlice'; // Action pour stocker le token dans le store

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading, isError }] = useLoginMutation(); // Hook RTK Query pour la mutation
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialisation du hook pour la redirection

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { token } = await login({ email, password }).unwrap(); // Appelle l'API et déstructure le token
      dispatch(setToken(token)); // Enregistre le token dans le store
      console.log('Connexion réussie !');
      navigate('/modules'); // Redirection vers la page des modules
    } catch (error) {
      console.error('Erreur de connexion :', error);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Mot de passe"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex items-center">
        <input type="checkbox" id="keep-logged-in" className="mr-2" />
        <label htmlFor="keep-logged-in" className="text-sm">Keep me logged in</label>
      </div>
      <Button
        text={isLoading ? 'Connexion...' : 'Se connecter'}
        type="submit"
      />
      {isError && (
        <p className="text-red-500 text-sm">
          Une erreur est survenue lors de la connexion.
        </p>
      )}
      <p className="text-center text-sm">
        Mot de passe oublié? <a href="#" className="text-blue-600">Réinitialiser</a>
      </p>
    </form>
  );
};

export default LoginForm;
