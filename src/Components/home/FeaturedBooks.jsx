import BookCard from '@/Components/books/BookCard';

export default function FeaturedBooks({ books, onAddToCart }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">Featured Books</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Featured Books
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Discover some of our most popular and recommended books.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
}
