'use client';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { FaHome, FaUser, FaQuestionCircle } from 'react-icons/fa';
import { FiClipboard, FiSettings } from 'react-icons/fi';

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (route: string) => pathname === route;

  const navItems = [
    { label: 'Home', icon: <FaHome />, route: '/' },
    { label: 'User', icon: <FaUser />, route: '/user' },
    { label: 'Orders', icon: <FiClipboard />, route: '/orders' },
    { label: 'Help', icon: <FaQuestionCircle />, route: '/help' },
    { label: 'Settings', icon: <FiSettings />, route: '/settings' },
  ];

  return (
    <div className="fixed bottom-0 w-full bg-white border-t px-4 py-2 flex justify-between z-50">
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={() => router.push(item.route)}
          className="flex flex-col items-center text-xs gap-1"
        >
          {/* Use type-safe spread for SVG icon props */}
          {React.cloneElement(item.icon, {
            ...(item.icon.props as object),
            className: isActive(item.route) ? 'text-green-400' : 'text-gray-500',
            size: 20,
          })}
          <span className={isActive(item.route) ? 'text-green-400' : 'text-gray-500'}>
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
}
