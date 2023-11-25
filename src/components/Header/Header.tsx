import React from "react";

export default function Header() {
  return (
    // Header (Hace una llamada a todos los followers de todas las redes)
    <header className="mb-4 border-b border-gray-500 pb-4">
      <h1 className="text-2xl font-bold">Social Media Dashboard</h1>
      <p className="text-sm text-gray-500">Total Followers: 20.000</p>
    </header>
  );
}
