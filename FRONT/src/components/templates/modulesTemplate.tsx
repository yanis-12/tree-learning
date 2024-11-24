import React from 'react';
import { useGetModulesQuery } from '../../api/endpoints/modules';
import { Module } from '../../types/modules';
import LogoutButton from '../atoms/LogoutButton'; 

const ModulesList: React.FC = () => {
  const { data: modules, error, isLoading } = useGetModulesQuery();

  if (isLoading) {
    return <p className="text-center text-gray-600">Chargement des modules...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Erreur lors du chargement des modules.</p>;
  }

  if (!modules || modules.length === 0) {
    return <p className="text-center text-gray-600">Aucun module disponible.</p>;
    
  }

  return (
    <div className="p-5">
      {/* Utilisation du composant LogoutButton */}
      <LogoutButton className="mb-4" />

      <h1 className="text-3xl font-bold text-center mb-5">Liste des Modules</h1>

      <ul className="space-y-4">
        {modules.map((module: Module) => (
          <li
            key={module.id}
            className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900">{module.title}</h2>
            <p className="text-gray-700 mt-2">{module.description}</p>
            <p className="text-sm text-gray-500 mt-3">
              Créé le : {new Date(module.created_at).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModulesList;