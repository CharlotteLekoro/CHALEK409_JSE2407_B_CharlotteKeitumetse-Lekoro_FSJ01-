import Link from "next/link";

export default function Home() {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex flex-col items-start justify-center text-zinc
       p-8"
      
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-slate-700refactorogm opacity-20"></div>

      {/* Text content */}
      <div className="relative z-10 text-left px-4 max-w-5xl">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 py-8">
                         WELCOME!!!
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Feel Free to click and browse a wide range of products we have.
        </p>

        {/* Button */}
        <button className="bg-slate text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-500">
          <Link href="/products">View Products</Link>
        </button>
      </div>
    </div>
  );
}
