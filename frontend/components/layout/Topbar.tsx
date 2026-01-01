"use client";

import Image from "next/image";
import { Search, Bell } from "lucide-react";

export default function Topbar() {
  return (
    <header className="bg-white">
      <div className="flex items-center justify-between px-20 py-4">
        {/* Left Section */}
        <div className="flex items-center gap-24">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Ashika Logo"
            width={80}
            height={40}
            priority
          />

          {/* Search */}
          <div className="relative w-[420px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#6C757D]" />
            <input
              type="text"
              placeholder="Search something..."
              className="
                w-full h-[44px] pl-11 pr-4
                rounded-[12px] border border-gray-200
                text-sm text-[#41414E]
                placeholder:text-[#6C757D]
                focus:outline-none focus:ring-2 focus:ring-[#0063F5]
                focus:border-transparent
              "
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notification Icon */}
          <div className="relative">
            <Bell className="h-9 w-9 text-[#0063F5] bg-[#EEF7FF] p-1 rounded-full border-[1px] border-[#CCCCCC]" />
            <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-[#0063F5] rounded-full"></span>
          </div>

          {/* User Info */}
          <Image
            src="/profile.png"
            alt="User Avatar"
            width={42}
            height={42}
            className="rounded-full border-[2px] border-[#023E7A]"
          />

          <div className="">
            <div className="text-base font-semibold text-[#41414E]">
              Chirag Singh
            </div>
            <div className="text-xs text-[#6C757D]">chiragsingh@ashika.com</div>
          </div>
        </div>
      </div>
    </header>
  );
}
