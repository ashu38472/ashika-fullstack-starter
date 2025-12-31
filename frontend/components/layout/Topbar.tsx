"use client";

export default function Topbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      {/* Left: Search */}
      <div className="flex items-center gap-2 w-1/2">
        <input
          type="text"
          placeholder="Search something..."
          className="w-full max-w-md px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

      {/* Right: User Info */}
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-semibold">Chirag Singh</p>
          <p className="text-xs text-gray-500">chiragsingh@ashika.com</p>
        </div>

        <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center font-semibold">
          CS
        </div>
      </div>
    </header>
  );
}
