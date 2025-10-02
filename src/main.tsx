import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  document.body.innerHTML = `
    <div style="padding: 40px; font-family: system-ui; max-width: 600px; margin: 0 auto;">
      <h1 style="color: red;">Fehler: Root Element nicht gefunden</h1>
      <p>Das div#root Element existiert nicht im DOM.</p>
    </div>
  `;
  throw new Error('Root element not found');
}

try {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} catch (error) {
  console.error('Fehler beim Rendern:', error);
  document.body.innerHTML = `
    <div style="padding: 40px; font-family: system-ui; max-width: 600px; margin: 0 auto;">
      <h1 style="color: red;">Render-Fehler</h1>
      <pre style="background: #f5f5f5; padding: 16px; overflow: auto;">${error}</pre>
    </div>
  `;
}
