import { ArrowRight, BookOpenText, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router';

import { Button } from '@/Components/ui/button';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.18),_transparent_32%),linear-gradient(135deg,#fff8ef_0%,#fff_38%,#f8fafc_100%)] py-16 sm:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.0)_0%,rgba(255,255,255,0.3)_40%,rgba(255,255,255,0.0)_100%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-800">
            <Sparkles className="h-4 w-4" />
            Curated reads for curious minds
          </div>

          <div className="space-y-5">
            <h1 className="max-w-xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Discover Your Next Great Read
            </h1>
            <p className="max-w-xl text-lg text-slate-600 sm:text-xl">
              Explore thousands of books, discover new authors, and find stories that inspire, educate, and entertain.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={() => navigate('/books')} className="gap-2">
              Browse Books
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/categories')}>
              Explore Categories
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <BookOpenText className="h-4 w-4 text-amber-600" />
              25k+ titles
            </div>
            <div>4.8 average rating</div>
            <div>Fast delivery</div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -right-10 top-8 h-56 w-56 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="absolute -left-10 bottom-6 h-48 w-48 rounded-full bg-violet-200/40 blur-3xl" />

          <div className="relative w-full max-w-md rounded-[32px] border border-slate-200 bg-white/80 p-5 shadow-[0_25px_60px_rgba(15,23,42,0.12)] backdrop-blur-sm">
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Bestseller</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">The Silent Chapter</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-200 via-orange-100 to-rose-200 text-lg font-bold text-slate-800">
                T
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-[28px] bg-gradient-to-br from-amber-200 via-orange-100 to-rose-200 p-6 shadow-inner">
                <div className="flex h-52 items-end justify-between rounded-[22px] border border-white/50 bg-white/20 p-4 backdrop-blur-sm">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-700">Fiction</p>
                    <p className="mt-3 text-3xl font-bold text-slate-900">A new</p>
                    <p className="text-3xl font-bold text-slate-900">adventure</p>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-lg font-bold text-white shadow-lg">
                    4.8
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Readers</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">8.4k</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Genres</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">36</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
