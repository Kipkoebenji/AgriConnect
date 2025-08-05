"use client";

import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<"farmer" | "buyer" | "">("");
  
  const router = useRouter();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
     if (!role) {
      alert("Please select your role");
      return;
    }

    if (role === "farmer") {
      router.push("/farmerDashboard");
    } else if (role === "buyer") {
      router.push("/buyerDashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <input
              type="radio"
              name="role"
              value="farmer"
              checked={role === "farmer"}
              onChange={() => setRole("farmer")}
              className="mr-1"
            />
            <label htmlFor="farmer" className="px-3">Login as farmer</label>
          <input
              type="radio"
              name="role"
              value="buyer"
              checked={role === "buyer"}
              onChange={() => setRole("buyer")}
              className="mr-1"
            />
            <label htmlFor="buyer" className="px-3">Login as buyer</label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
