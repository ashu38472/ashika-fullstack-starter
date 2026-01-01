"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import { useAuth } from "@/app/context/AuthContext";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  // ⏳ Wait until auth is resolved
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <span className="text-sm text-[#6C757D]">Loading...</span>
      </div>
    );
  }

  // 🚫 Prevent rendering before redirect
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="h-screen w-screen bg-white flex flex-col">
      {/* Topbar */}
      <Topbar />

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <div className="flex-1 bg-white">
          <main
            className="
              h-full
              overflow-y-auto
              bg-[#EEF7FF]
              rounded-tl-[30px]
              shadow-sm
            "
          >
            {/* STANDARD PAGE SPACING */}
            <div className="max-w-[1600px] mx-auto px-8 py-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
