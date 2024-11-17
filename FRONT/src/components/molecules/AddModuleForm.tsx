import React, { useState } from 'react';
import { useAddModuleMutation } from '../../api/endpoints/modules';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

interface ErrorResponse {
  message: string;
}

const AddModuleForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [addModule, { isLoading, error }] = useAddModuleMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      await addModule({ title });
      setTitle(''); // Réinitialiser après l'ajout
    }
  };

  const getErrorMessage = (error: FetchBaseQueryError | unknown): string => {
    if ('data' in (error as FetchBaseQueryError) && (error as FetchBaseQueryError).data) {
      const fetchError = error as FetchBaseQueryError;
      if (fetchError.data && typeof fetchError.data === 'object' && 'message' in fetchError.data) {
        return (fetchError.data as ErrorResponse).message;
      }
    }
    return 'Une erreur est survenue';
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex flex-col space-y-4">
        <Input
          placeholder="Titre du module"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button text={isLoading ? 'Ajout en cours...' : 'Ajouter'} />
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-2">
          {getErrorMessage(error)}
        </p>
      )}
    </form>
  );
};

export default AddModuleForm;
