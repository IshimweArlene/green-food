'use client';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { FaHome, FaUser, FaQuestionCircle } from 'react-icons/fa';
import { FiClipboard, FiSettings } from 'react-icons/fi';

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (route: string) => pathname === route;

  const navItems = [
    { label: 'Home', icon: <FaHome />, route: '/home' },
    { label: 'User', icon: <FaUser />, route: '/user' },
    { label: 'Orders', icon: <FiClipboard />, route: '/orders' },
    { label: 'Help', icon: <FaQuestionCircle />, route: '/help' },
    { label: 'Settings', icon: <FiSettings />, route: '/settings' },
  ];

  return (
    <div className="w-full bg-white border-t px-4 py-2 flex justify-between">
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={() => router.push(item.route)}
          className="flex flex-col items-center text-xs gap-1 w-full"
        >
          {React.cloneElement(item.icon, {
            ...(item.icon.props as object),
            className: isActive(item.route) ? 'text-cyan-400' : 'text-gray-500',
            size: 20,
          })}
          <span className={isActive(item.route) ? 'text-cyan-400' : 'text-gray-500'}>
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
}
