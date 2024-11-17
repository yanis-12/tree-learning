// src/index.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Importer le Provider de Redux
import './index.css';
import App from './App.tsx';
import { store} from './store/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>  {/* Enveloppe ton application dans le Provider */}
      <App />
    </Provider>
  </StrictMode>
);
