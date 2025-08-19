"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Katalog", href: "/katalog" },
    { name: "Lokasi", href: "/lokasi" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://tokopedia.link/fTiHvEaIHVb"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="Hanoda.png" className="h-8" alt="Logo Hanoda" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            HANODA STORE
          </span>
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block py-2 px-3 rounded-sm md:p-0 ${
                      isActive
                        ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
