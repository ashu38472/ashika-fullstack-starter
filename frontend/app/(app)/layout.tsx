"use client";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen bg-white flex flex-col">
      {/* Topbar */}
      <Topbar />

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Content Wrapper */}
        <div className="flex-1 bg-white">
          {/* Scroll Container */}
          <main
            className="
              h-full
              overflow-y-auto
              bg-[#EEF7FF]
              rounded-tl-[30px]
              shadow-sm
            "
          >
            {/* STANDARD PAGE SPACING (GLOBAL) */}
            <div className="max-w-[1600px] mx-auto px-6 py-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
