"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Soilva website error</h1>
      <p>{error.message || "An unexpected error occurred."}</p>
      <button onClick={reset}>Try again</button>
    </main>
  );
}
