import { Globe } from 'lucide-react';
import { useContext } from 'react';

import AuthShell from '@/Components/auth/AuthShell';
import LoginForm from '@/Components/auth/LoginForm';
import { Button } from '@/Components/ui/button';
import { AuthContext } from '@/context/AuthContext';

export default function LoginPage() {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  return (
    <AuthShell
      title="Your next great story starts here."
      subtitle="Browse curated reads, discover new favorites, and keep your next literary escape close at hand."
      accentText="BookMart"
    >
      <LoginForm />

      <div className="mt-5">
        <div className="mb-4 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
          <span className="h-px flex-1 bg-slate-200" />
          or
          <span className="h-px flex-1 bg-slate-200" />
        </div>

        <Button
          type="button"
          onClick={handleGoogleLogin}
          variant="outline"
          size="lg"
          className="group h-12 w-full justify-center gap-3 rounded-2xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-200 hover:bg-amber-50 hover:text-amber-900 hover:shadow-[0_12px_28px_rgba(217,119,6,0.18)] focus-visible:ring-4 focus-visible:ring-amber-100"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 text-amber-700 shadow-inner shadow-amber-200/60 transition-transform duration-200 group-hover:scale-105">
            <Globe className="h-4 w-4" />
          </span>
          Continue with Google
        </Button>
      </div>
    </AuthShell>
  );
}
