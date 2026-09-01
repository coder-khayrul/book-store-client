import { Star } from 'lucide-react';
import { useNavigate } from 'react-router';

import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';

export default function BookCard({ book, onAddToCart }) {
  const navigate = useNavigate();

  return (
    <article className="group overflow-hidden rounded-[28px] border border-border/80 bg-card shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
      <div className={`flex h-60 items-end justify-between bg-gradient-to-br ${book.coverClass} p-5`}>
        <div className="rounded-full border border-white/60 bg-white/25 px-3 py-1 text-xs font-medium text-slate-800 backdrop-blur-sm">
          {book.category}
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/60 bg-white/25 text-lg font-semibold text-slate-800 shadow-sm backdrop-blur-sm">
          {book.title.slice(0, 1)}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-foreground">{book.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">by {book.author}</p>
          </div>
          <Badge className="bg-amber-50 text-amber-700 ring-amber-200">${book.price.toFixed(2)}</Badge>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{book.category}</span>
          <span className="inline-flex items-center gap-1 font-medium text-amber-600">
            <Star className="h-4 w-4 fill-current" />
            {book.rating}
          </span>
        </div>

        <div className="flex gap-2 pt-2">
          <Button
            className="flex-1"
            onClick={() => onAddToCart(book)}
          >
            Add to Cart
          </Button>
          <Button variant="outline" className="flex-1" onClick={() => navigate(`/books/${book.id}`)}>
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
}
