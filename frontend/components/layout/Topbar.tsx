"use client";

import Image from "next/image";
import { Search, Bell, LogOut, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { logout } = useAuth();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    router.replace("/login");
  };

  return (
    <>
      <header className="bg-white">
        <div className="flex items-center justify-between px-20 py-4">
          {/* Left Section */}
          <div className="flex items-center gap-24">
            <Image src="/logo.png" alt="Ashika Logo" width={80} height={40} />

            <div className="relative w-[420px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#6C757D]" />
              <input
                type="text"
                placeholder="Search something..."
                className="w-full h-[44px] pl-11 pr-4 rounded-[12px] border border-gray-200
                text-sm text-[#41414E] placeholder:text-[#6C757D]
                focus:outline-none focus:ring-2 focus:ring-[#0063F5]"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 relative" ref={menuRef}>
            {/* Notification */}
            <div className="relative">
              <Bell className="h-9 w-9 text-[#0063F5] bg-[#EEF7FF] p-1 rounded-full border border-[#CCCCCC]" />
              <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-[#0063F5] rounded-full" />
            </div>

            <div
              className="flex gap-4 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {/* User Avatar */}
              <Image
                src="/profile.png"
                alt="User Avatar"
                width={42}
                height={42}
                className="rounded-full border-2 border-[#023E7A]"
              />

              <div>
                <div className="text-base font-semibold text-[#41414E]">
                  Chirag Singh
                </div>
                <div className="text-xs text-[#6C757D]">
                  chiragsingh@ashika.com
                </div>
              </div>
            </div>

            {/* Dropdown */}
            {menuOpen && (
              <div className="absolute right-0 top-14 w-48 bg-white rounded-xl shadow-lg border border-gray-100 z-50">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    router.push("/profile");
                  }}
                  className="flex items-center gap-3 w-full px-4 py-3 text-sm text-[#41414E] hover:bg-[#EEF7FF]"
                >
                  <User className="h-4 w-4 text-[#0063F5]" />
                  Profile
                </button>

                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setConfirmLogout(true);
                  }}
                  className="flex items-center gap-3 w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Logout Confirmation Dialog */}
      {confirmLogout && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-[360px] shadow-xl">
            <h2 className="text-lg font-semibold text-[#41414E] mb-3">
              Confirm Logout
            </h2>
            <p className="text-sm text-[#6C757D] mb-6">
              Are you sure you want to logout?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirmLogout(false)}
                className="px-4 py-2 rounded-lg text-[#41414E] bg-[#F5F9FF] border text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
