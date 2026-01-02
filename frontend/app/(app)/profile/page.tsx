"use client";

import Image from "next/image";
import { Camera, EyeOff } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="space-y-4 h-[800px]">
      {/* Page Title */}
      <h1 className="text-[20px] font-semibold text-[#6C757D]">
        Edit Profile
      </h1>

      {/* Main Card */}
      <div className="relative bg-white h-full rounded-2xl overflow-hidden shadow-sm">
        {/* Cover Section */}
        <div className="relative h-[240px] bg-gradient-to-r from-[#1E40AF] via-[#1D4ED8] to-[#312E81]">
          <button
            className="
              absolute top-4 right-4
              flex items-center gap-2
              border border-white/80
              text-white text-sm
              px-4 py-2 rounded-lg
              hover:bg-white/10
            "
          >
            <Camera className="h-4 w-4" />
            Change Cover
          </button>
        </div>

        {/* Content */}
        <div className="flex h-full gap-8 p-6">
          {/* Left Profile Card */}
          <div className="absolute top-32 w-[320px] h-[500px] bg-[#EAF3FF] rounded-xl p-4 flex flex-col items-center">
            <div className="w-[240px] h-[260px] relative rounded-lg overflow-hidden mb-4">
              <Image
                src="/profile.png"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-[#023E7A] font-semibold">
              Chirag Singh
            </p>
          </div>

          {/* Right Form */}
          <div className="absolute left-96 flex-1">
            <div className="grid grid-cols-2 gap-6 max-w-[520px]">
              {/* First Name */}
              <div>
                <label className="block text-sm text-[#6C757D] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Chirag"
                  className="w-full h-[40px] rounded-lg border border-gray-300 px-3 text-sm"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm text-[#6C757D] mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  defaultValue="Singh"
                  className="w-full h-[40px] rounded-lg border border-gray-300 px-3 text-sm"
                />
              </div>
            </div>

            {/* Password Section */}
            <div className="mt-6 max-w-[520px]">
              <label className="block text-sm text-[#6C757D] mb-1">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  value="********"
                  disabled
                  className="
                    w-full h-[40px]
                    rounded-lg border border-gray-300
                    px-3 pr-10 text-sm bg-gray-50
                  "
                />
                <EyeOff className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>

              <button
                className="mt-2 text-sm text-[#0063F5] font-medium"
              >
                Change password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
