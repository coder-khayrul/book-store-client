import { BookOpen } from 'lucide-react';

export default function AuthShell({ title, subtitle, children, accentText = 'Book Haven' }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FFFBEB] text-slate-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="floating-blob absolute -left-20 top-10 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="floating-blob absolute right-[-30px] top-1/3 h-80 w-80 rounded-full bg-orange-200/25 blur-3xl" style={{ animationDelay: '1.5s' }} />
        <div className="floating-blob absolute bottom-[-40px] left-1/3 h-72 w-72 rounded-full bg-yellow-200/25 blur-3xl" style={{ animationDelay: '3s' }} />

        <div className="absolute left-16 top-20 hidden rotate-[-18deg] rounded-[32px] border border-amber-200/80 bg-white/60 p-4 shadow-lg backdrop-blur-sm lg:block">
          <div className="flex h-24 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-200 via-amber-100 to-yellow-50 text-2xl font-bold text-slate-800">
            A
          </div>
        </div>

        <div className="absolute bottom-20 right-10 hidden rotate-[16deg] rounded-[32px] border border-slate-200 bg-white/70 p-4 shadow-lg backdrop-blur-sm lg:block">
          <div className="flex h-20 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 text-xl font-bold text-white">
            B
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-3 opacity-0 animate-[fadeInLeft_700ms_ease-out_forwards]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111827] text-white shadow-lg shadow-amber-200/30 transition-transform duration-700 hover:scale-105">
              <BookOpen className="h-6 w-6 text-amber-400" />
            </div>
            <div>
              <div className="text-2xl font-bold tracking-tight text-[#111827] opacity-0 animate-[fadeInUp_500ms_ease-out_150ms_forwards]">
                {accentText}
              </div>
            </div>
          </div>

          <div className="max-w-xl opacity-0 animate-[fadeInLeft_700ms_ease-out_300ms_forwards]">
            <h1 className="text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-8 text-slate-600">
              {subtitle}
            </p>
          </div>

          <div className="mt-10 w-full max-w-md opacity-0 animate-[fadeInLeft_700ms_ease-out_450ms_forwards]">
            <div className="relative rounded-[32px] border border-amber-200/70 bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.15),_transparent_50%),rgba(255,255,255,0.75)] p-6 shadow-[0_25px_50px_rgba(17,24,39,0.08)] backdrop-blur-sm">
              <div className="absolute inset-x-6 top-0 h-24 rounded-b-[36px] bg-gradient-to-r from-amber-200/30 via-yellow-100/30 to-orange-200/20 blur-2xl" />
              <div className="relative flex items-center justify-center gap-6">
                <div className="flex h-20 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#111827] to-slate-700 text-xl font-bold text-white shadow-lg shadow-slate-900/15">
                  01
                </div>
                <div className="space-y-2 text-left">
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">Featured</div>
                  <div className="text-xl font-semibold text-slate-900">The Silent Chapter</div>
                  <div className="text-sm text-slate-600">A story that stays with you</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-xl opacity-0 animate-[fadeInRight_700ms_cubic-bezier(0.22,1,0.36,1)_120ms_forwards]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
