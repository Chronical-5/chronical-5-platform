'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="border-b border-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Chronical 5</h1>
          <div className="flex gap-4">
            {session ? (
              <>
                <Link href="/dashboard" className="hover:text-gray-300">
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="hover:text-gray-300">
                  Login
                </Link>
                <Link href="/auth/signup" className="bg-white text-black px-4 py-2 rounded">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-6xl font-bold mb-6">Transform Ideas Into Reality</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Chronical 5 is your AI-powered companion for building businesses, creating stories, and generating innovative ideas.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/auth/signup" className="bg-white text-black px-8 py-3 rounded font-bold">
            Get Started
          </Link>
        </div>
      </main>
    </div>
  );
}