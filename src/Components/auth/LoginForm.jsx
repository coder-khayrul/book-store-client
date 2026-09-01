import { AlertCircle, ArrowRight, Eye, EyeOff, Loader2, Lock, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

import { Alert } from '@/Components/ui/alert';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Checkbox } from '@/Components/ui/checkbox';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.email || !form.password) {
      setError('Please enter your email and password to continue.');
      return;
    }

    setLoading(true);

    window.setTimeout(() => {
      setLoading(false);
    }, 1200);
  };

  return (
    <Card className="border-slate-200 bg-white/90 shadow-[0_25px_60px_rgba(17,24,39,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_70px_rgba(17,24,39,0.12)]">
      <CardHeader className="space-y-2 pb-6">
        <CardTitle className="text-3xl font-bold tracking-tight text-[#111827]">Welcome Back</CardTitle>
        <CardDescription className="text-base text-slate-500">
          Sign in to continue to your BookMart account.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2 transition-all duration-300">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors duration-200 focus-within:text-amber-600" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="h-12 border-slate-200 bg-white pl-10 text-slate-900 shadow-sm transition-all duration-200 placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 focus-visible:outline-none"
              />
            </div>
          </div>

          <div className="space-y-2 transition-all duration-300">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors duration-200 focus-within:text-amber-600" />
              <Input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                className="h-12 border-slate-200 bg-white pl-10 pr-11 text-slate-900 shadow-sm transition-all duration-200 placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 focus-visible:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition-all duration-200 hover:bg-amber-50 hover:text-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <Checkbox checked={rememberMe} onCheckedChange={setRememberMe} className="h-4 w-4" />
              <span>Remember me</span>
            </label>
            <button type="button" className="text-sm font-medium text-amber-700 transition-colors duration-200 hover:text-amber-800 hover:underline">
              Forgot password?
            </button>
          </div>

          {error ? (
            <Alert className="translate-y-0 opacity-100 transition-all duration-200">
              <AlertCircle className="mt-0.5 h-4 w-4" />
              <span>{error}</span>
            </Alert>
          ) : null}

          <Button
            type="submit"
            disabled={loading}
            className="group h-12 w-full justify-center gap-2 bg-[#D97706] text-white shadow-[0_10px_24px_rgba(217,119,6,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c56b05] hover:shadow-[0_14px_28px_rgba(217,119,6,0.32)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              <>
                Sign In
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="relative font-semibold text-amber-700 transition-colors duration-200 hover:text-amber-800">
            <span className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200 hover:after:scale-x-100">
              Create one
            </span>
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
