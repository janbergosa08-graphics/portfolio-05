export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="max-w-md text-center">
        <p className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-ink">Page not found</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <a href="/" className="mt-6 inline-flex items-center border border-line px-4 py-2 text-sm text-ink hover:border-accent">
          Back to homepage
        </a>
      </div>
    </main>
  );
}
