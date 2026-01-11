import React from 'react';
import ReactDOM from 'react-dom/client';
import ResourcesPage from '../components/ResourcesPage';


const rootElement = document.getElementById('resources-root');
if (!rootElement) {
  throw new Error("Could not find resources-root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ResourcesPage />
  </React.StrictMode>
);
