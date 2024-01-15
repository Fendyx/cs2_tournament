import React from 'react';
import ReactDOM from 'react-dom/client';

import './i18n';
import { Content } from './modules/Content';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>,
);
