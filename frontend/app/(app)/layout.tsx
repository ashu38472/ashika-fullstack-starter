"use client";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen bg-white overflow-hidden">
      {/* Topbar */}
      <Topbar />

      {/* Shell */}
      <div className="flex h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <Sidebar />

        {/* Content Wrapper (important layer) */}
        <div className="flex-1 bg-white">
          {/* Actual Content Surface */}
          <main
            className="
              h-full
              bg-[#EEF7FF]
              rounded-tl-[30px]
              shadow-sm
              overflow-auto
              p-6
            "
          >
            <div className="max-w-[1600px] mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
