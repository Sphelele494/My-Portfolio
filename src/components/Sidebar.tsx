import React, { useState } from "react";
import {
  House,
  User,
  FolderOpen,
  Code,
  Award,
  Mail,
  Menu,
  X,
} from "lucide-react";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-screen bg-white overflow-hidden flex flex-col p-6 transition-all duration-300 ease-in-out z-50 ${
          isOpen ? "w-48 border-r border-gray-200" : "w-16"
        } lg:w-48 lg:border-r lg:border-gray-200 xl:w-48 xl:border-r xl:border-gray-200`}
      >
        {/* Toggle Button */}
        <div className="flex justify-between items-center">
          {isOpen ? (
            <X className="block md:hidden cursor-pointer" onClick={closeSidebar} />
          ) : (
            <Menu className="block md:hidden cursor-pointer" onClick={toggleSidebar} />
          )}
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col mt-16 space-y-6 overflow-hidden flex-grow">
          {[
            { icon: House, label: "Home" },
            { icon: User, label: "Profile" },
            { icon: FolderOpen, label: "Projects" },
            { icon: Code, label: "Skills" },
            { icon: Award, label: "Achievements" },
            { icon: Mail, label: "Contact" },
          ].map(({ icon: Icon, label }, index) => (
            <div
              key={index}
              className="flex items-center gap-4 cursor-pointer"
              onClick={closeSidebar}
            >
              <Icon className="text-black" />
              <span className="text-sm font-medium whitespace-nowrap lg:opacity-100 xl:opacity-100 md:opacity-0">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        {(isOpen || window.innerWidth >= 1024) && (
          <div className="flex items-center w-full px-4 py-3 mt-auto space-x-3 border-t border-gray-300">
            <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-purple-500 cursor-pointer">
              <span className="text-[13px] font-bold text-fuchsia-800">SN</span>
            </div>
            <span className="text-[14px] font-medium text-fuchsia-800 tracking-tight whitespace-nowrap">
              Web Developer
            </span>
          </div>
        )}
      </div>

      {/* Blurred Backdrop for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-white/30 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}
    </>
  );
}
