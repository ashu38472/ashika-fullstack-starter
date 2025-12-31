"use client";

import Link from "next/link";

const links = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Mutual Fund Ledger", href: "/ledger/mutual" },
  { name: "Broking Ledger", href: "/ledger/broking" },
  { name: "Clients", href: "/clients" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black text-white p-6">
      <h1 className="text-xl font-bold mb-8">Ashika</h1>
      <nav className="space-y-4">
        {links.map(link => (
          <Link key={link.href} href={link.href}>
            <div className="hover:text-gray-300 cursor-pointer">
              {link.name}
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
