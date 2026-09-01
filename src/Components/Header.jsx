import { BookOpen, LogOut, Menu, Search, ShoppingCart, User, X } from 'lucide-react';
import { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';

import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/Components/ui/sheet';
import { AuthContext } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Books', to: '/books' },
  { label: 'Categories', to: '/categories' },
];

const Header = () => {
  const navigate = useNavigate();
  const { itemCount } = useCart();
  const { user, userSignOut } = useContext(AuthContext) ?? {};
  const [query, setQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const isLoggedIn = Boolean(user);

  const handleSearch = (event) => {
    event.preventDefault();
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      navigate('/books');
      return;
    }

    navigate(`/books?search=${encodeURIComponent(trimmedQuery)}`);
  };

  const handleLogout = async () => {
    if (userSignOut) {
      await userSignOut();
    }
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xl font-bold tracking-tight text-slate-900">BookMart</p>
          </div>
        </Link>

        <form onSubmit={handleSearch} className="hidden flex-1 justify-center px-6 lg:flex">
          <div className="relative w-full max-w-xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search books, authors, categories..."
              className="h-12 rounded-full border-slate-200 bg-slate-50 pl-11 pr-4 text-sm shadow-sm transition focus-visible:ring-amber-200"
            />
          </div>
        </form>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => navigate('/books?search=')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 lg:hidden"
            aria-label="Search books"
          >
            <Search className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => navigate('/cart')}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            aria-label="View cart"
          >
            <ShoppingCart className="h-4 w-4" />
            {itemCount > 0 ? (
              <Badge className="absolute -right-1 -top-1 min-h-5 min-w-5 rounded-full bg-amber-500 px-1.5 text-[10px] text-white ring-2 ring-white">
                {itemCount}
              </Badge>
            ) : null}
          </button>

          {isLoggedIn ? (
            <div className="hidden items-center gap-3 lg:flex">
              <button
                type="button"
                onClick={() => navigate('/profile')}
                className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-slate-100 shadow-sm transition hover:border-amber-200 hover:bg-amber-50"
                aria-label="View profile"
              >
                {user.photoURL ? (
                  <img src={user.photoURL} alt="Profile" className="h-full w-full object-cover" />
                ) : (
                  <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-500 to-orange-400 text-sm font-semibold text-white">
                    {(user.displayName?.[0] || user.email?.[0] || 'U').toUpperCase()}
                  </span>
                )}
              </button>

              <Button variant="ghost" onClick={handleLogout} className="gap-2 text-slate-700">
                <LogOut className="h-4 w-4" /> Logout
              </Button>
            </div>
          ) : (
            <div className="hidden items-center gap-2 lg:flex">
              <Button variant="ghost" onClick={() => navigate('/login')} className="gap-2">
                <User className="h-4 w-4" /> Login
              </Button>
              <Button onClick={() => navigate('/register')}>Register</Button>
            </div>
          )}

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 lg:hidden" onClick={() => setMobileOpen(true)}>
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm p-0">
              <div className="flex items-center justify-between border-b px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <span className="text-lg font-semibold text-slate-900">BookMart</span>
                </div>
                <button type="button" onClick={() => setMobileOpen(false)} className="rounded-full p-2 text-slate-500 hover:bg-slate-100">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-2 p-5">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center rounded-2xl px-3 py-3 text-base font-medium transition ${
                        isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <NavLink to="/cart" onClick={() => setMobileOpen(false)} className="flex items-center rounded-2xl px-3 py-3 text-base font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900">
                  Cart {itemCount > 0 ? `(${itemCount})` : ''}
                </NavLink>

                {isLoggedIn ? (
                  <div className="space-y-3 pt-3">
                    <button
                      type="button"
                      onClick={() => { setMobileOpen(false); navigate('/profile'); }}
                      className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-amber-500 to-orange-400 text-sm font-semibold text-white">
                          {user.photoURL ? (
                            <img src={user.photoURL} alt="Profile" className="h-full w-full object-cover" />
                          ) : (
                            <span>{(user.displayName?.[0] || user.email?.[0] || 'U').toUpperCase()}</span>
                          )}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">{user.displayName || 'My Profile'}</div>
                          <div className="text-xs text-slate-500">{user.email}</div>
                        </div>
                      </div>
                      <User className="h-4 w-4 text-slate-500" />
                    </button>

                    <Button variant="outline" className="w-full justify-center gap-2" onClick={() => { setMobileOpen(false); handleLogout(); }}>
                      <LogOut className="h-4 w-4" /> Logout
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3 pt-3">
                    <Button variant="outline" className="w-full justify-center" onClick={() => { setMobileOpen(false); navigate('/login'); }}>
                      Login
                    </Button>
                    <Button className="w-full justify-center" onClick={() => { setMobileOpen(false); navigate('/register'); }}>
                      Register
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;