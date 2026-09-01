import { ArrowRight, BookOpenText, BriefcaseBusiness, GraduationCap, Lightbulb, Microscope, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router';

import { Button } from '@/Components/ui/button';

const categoryIcons = {
  Fiction: Sparkles,
  Technology: BookOpenText,
  Business: BriefcaseBusiness,
  Science: Microscope,
  Education: GraduationCap,
  'Self Development': Lightbulb,
};

export default function CategoriesSection({ categories }) {
  const navigate = useNavigate();

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-700">Browse by Category</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Browse by Category
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Find the perfect book from your favorite categories.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => {
            const Icon = categoryIcons[category.name] || BookOpenText;

            return (
              <button
                key={category.name}
                type="button"
                onClick={() => navigate(`/books?category=${encodeURIComponent(category.slug)}`)}
                className="group rounded-[28px] border border-slate-200 bg-white p-6 text-left shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_18px_35px_rgba(124,58,237,0.08)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {category.count} Books
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">{category.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-700">
                  Explore now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
