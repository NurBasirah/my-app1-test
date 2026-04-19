"use client";
import Link from "next/link";

export default function LoginPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for authentication goes here!
    alert("Login logic coming soon!");
  };

  return (
    <>
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-red-600">Welcome Back</h1>
        <p className="text-zinc-500 mt-2">Log in to continue your HSK 1 journey.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input 
            type="email" 
            placeholder="name@example.com"
            className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent focus:ring-2 focus:ring-red-600 outline-none transition-all"
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent focus:ring-2 focus:ring-red-600 outline-none transition-all"
            required 
          />
        </div>
        <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-colors mt-2">
          Sign In
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-zinc-500">
        Don't have an account?{" "}
        <Link href="/register" className="text-red-600 font-semibold hover:underline">
          Sign up for free
        </Link>
      </div>
    </>
  );
}