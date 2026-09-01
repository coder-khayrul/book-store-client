
import MainLayout from '@/Layouts/MainLayout';
import { createBrowserRouter } from 'react-router';

import BookDetailsPage from '@/Pages/BookDetails';
import BooksPage from '@/Pages/Books';
import CartPage from '@/Pages/Cart';
import CategoriesPage from '@/Pages/Categories';
import Home from '@/Pages/Home';
import LoginPage from '@/Pages/Login';
import RegisterPage from '@/Pages/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: 'books', Component: BooksPage },
      { path: 'books/:id', Component: BookDetailsPage },
      { path: 'categories', Component: CategoriesPage },
      { path: 'cart', Component: CartPage },
      { path: 'login', Component: LoginPage },
      { path: 'register', Component: RegisterPage },
    ],
  },
]);