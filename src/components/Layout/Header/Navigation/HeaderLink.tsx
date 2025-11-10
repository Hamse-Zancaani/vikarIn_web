"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderItem } from "../../../../types/menu";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMouseEnter = () => {
    if (item.submenu) setSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  const isActive =
    pathname === item.href ||
    (item.href.startsWith("/#") && pathname === "/");

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        scroll={item.href.startsWith("/#")}
        className={`text-[17px] flex items-center font-medium capitalize transition-colors duration-200 ${
          isActive ? "text-primary" : "text-muted hover:text-primary"
        }`}
      >
        {item.label}

        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 24 24"
            className="ml-1"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>

      {/* Submenu */}
      {submenuOpen && item.submenu && (
        <div
          className="absolute left-0 mt-1 w-60 bg-white dark:bg-darklight dark:text-white shadow-lg rounded-lg py-2 z-50"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          {item.submenu.map((subItem, index) => {
            const subActive = pathname === subItem.href;
            return (
              <Link
                key={index}
                href={subItem.href}
                className={`block px-4 py-2 rounded-md transition ${
                  subActive
                    ? "bg-primary text-white"
                    : "text-black dark:text-white hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {subItem.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
