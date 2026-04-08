'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-6xl font-serif font-bold text-accent">Oops</p>
        <h2 className="mt-4 font-serif text-2xl sm:text-3xl font-bold text-charcoal">
          Something went wrong
        </h2>
        <p className="mt-3 text-warm-gray text-lg">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="inline-block mt-8 px-8 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
