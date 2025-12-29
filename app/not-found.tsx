import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-black">404</h1>
        <h2 className="text-3xl font-semibold mt-4 text-black">Page Not Found</h2>
        <p className="text-accent-600 mt-2 mb-8">
          The page you are looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-black text-white rounded-md hover:bg-accent-800 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
