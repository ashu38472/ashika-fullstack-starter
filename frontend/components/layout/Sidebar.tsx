"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutGrid,
  Users,
  BarChart3,
  TrendingUp,
  FileText,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import RightCorvedShape from "../sidebar/RightCurvedShape";

interface MenuItem {
  name: string;
  href: string;
  icon: React.ElementType;
  subItems?: { name: string; href: string }[];
}

const menuItems: MenuItem[] = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutGrid,
  },
  {
    name: "Client Management",
    href: "/clients",
    icon: Users,
  },
  {
    name: "Revenue Analysis",
    href: "/revenue",
    icon: BarChart3,
  },
  {
    name: "Client Activity",
    href: "/activity",
    icon: TrendingUp,
  },
  {
    name: "Details",
    href: "/details",
    icon: FileText,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (name: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <aside
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-white transition-all duration-300 flex flex-col relative h-full`}
    >
      {/* Collapse Toggle Button */}
      {/* <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 -top-3 bg-white border border-gray-200 rounded-full p-1 hover:bg-gray-50 z-99 shadow-sm"
      >
        {isCollapsed ? (
          <ChevronRight className="h-4 w-4 text-gray-600" />
        ) : (
          <ChevronLeft className="h-4 w-4 text-gray-600" />
        )}
      </button> */}
      {/* Navigation */}
      <nav className="flex-1 p-4 mt-5 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");
          const hasSubItems = item.subItems && item.subItems.length > 0;
          const isOpen = openMenus[item.name];

          return (
            <div key={item.name}>
              <Link
                href={item.href}
                className={`
                  relative flex items-center gap-3 px-4 py-3 transition-all duration-200
                  rounded-l-lg hover:rounded-r-lg
                  ${
                    isActive
                      ? "bg-[#EEF7FF] text-[#41414E]"
                      : "text-[#6C757D] hover:bg-[#F5F9FF] hover:text-[#0063F5]"
                  }
                  ${isCollapsed ? "justify-center" : ""}
                `}
              >
                {/* RIGHT CURVED SHAPE (submerged effect) */}
                {isActive && <RightCorvedShape />}

                {/* Icon */}
                <Icon
                  className={`
                  h-5 w-5 flex-shrink-0
                  ${isActive ? "text-[#0063F5] fill-[#0063F5]" : ""}
                `}
                />

                {!isCollapsed && (
                  <span className="font-medium">{item.name}</span>
                )}
              </Link>

              {/* Sub Items */}
              {hasSubItems && isOpen && !isCollapsed && (
                <div className="ml-12 mt-2 space-y-1">
                  {item.subItems?.map((subItem) => {
                    const isSubActive = pathname === subItem.href;
                    return (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`
                          block px-4 py-2 rounded-lg text-sm transition-colors
                          ${
                            isSubActive
                              ? "bg-[#EEF7FF] text-[#0063F5] font-medium"
                              : "text-[#6C757D] hover:bg-[#EEF7FF] hover:text-[#0063F5]"
                          }
                        `}
                      >
                        {subItem.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-100">
          <p className="text-xs text-[#6C757D] text-center">© 2025 SDAI</p>
        </div>
      )}
    </aside>
  );
}
