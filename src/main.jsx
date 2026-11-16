import React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/karantina/300.css';
import '@fontsource/karantina/400.css';
import '@fontsource/karantina/700.css';
import '@fontsource/assistant/400.css';
import '@fontsource/assistant/700.css';
import '@fontsource/assistant/800.css';
import './styles.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(<App />);
