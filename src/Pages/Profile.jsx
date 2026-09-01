import { useContext } from 'react';
import { Link, Navigate } from 'react-router';

import { Button } from '@/Components/ui/button';
import { AuthContext } from '@/context/AuthContext';

export default function ProfilePage() {
  const { user, userSignOut } = useContext(AuthContext) ?? {};

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const initials = (user.displayName?.[0] || user.email?.[0] || 'U').toUpperCase();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-amber-500 to-orange-400 text-2xl font-bold text-white shadow-md">
            {user.photoURL ? (
              <img src={user.photoURL} alt="Profile" className="h-full w-full object-cover" />
            ) : (
              initials
            )}
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Profile</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              {user.displayName || 'Book Lover'}
            </h1>
            <p className="mt-1 text-slate-600">{user.email}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-500">Account status</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">Active</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-500">Sign-in method</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">Google</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button onClick={userSignOut} className="bg-slate-900 text-white hover:bg-slate-800">
            Logout
          </Button>

          <Link to="/books">
            <Button variant="outline">Browse Books</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
