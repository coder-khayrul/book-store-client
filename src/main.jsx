import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import { CartProvider } from '@/context/CartContext';
import './index.css';
import { router } from './Routes/routes.jsx';
import AuthProvider from './context/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>

    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </AuthProvider>
  </StrictMode>
);
