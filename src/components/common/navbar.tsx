"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const navItems1 = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
  ];

  const navItems2 = [
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
  ];

  const allNavItems = [...navItems1, ...navItems2];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = "#contact-us";

    if (pathname !== "/") {
      // Navigate to root with hash
      router.push(`/${targetId}`);
    } else {
      // Scroll directly if already on root
      const section = document.querySelector(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Handle scrolling after navigation or page load with hash
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash; // e.g., "#contact-us"
      if (hash === "#contact-us") {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Run on mount or when pathname changes
    handleHashScroll();

    // Listen for hash changes (optional, if using browser back/forward)
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, [pathname]); // Re-run when pathname changes

  // Scroll handler for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition >= 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-screen px-1.5 z-[2350] flex items-center justify-center transition-all duration-300 ease-in-out ${
        isSticky ? "top-0" : "top-10"
      }`}>
      <div
        className={`w-full max-w-[1384px] h-16 font-inter px-6 py-5 md:pl-14 md:pr-10 bg-background2 border-b border-white/10 shadow-lg shadow-black/5 rounded-full flex items-center justify-between ${
          isSticky ? "mt-0" : ""
        }`}>
        {/* Logo - left on mobile */}
        <div
          className="md:hidden hover:cursor-pointer"
          onClick={() => router.push("/")}>
          <Image
            src="/logo.svg"
            alt="logo"
            width={152}
            height={40}
            className="h-fit w-fit"
          />
        </div>

        {/* First nav items - hidden on mobile */}
        <div className="hidden md:flex gap-7">
          {navItems1.map((item) => {
            const isActive = pathname === item.path;
            return (
              <div
                key={item.name}
                className="relative group">
                <Link
                  href={item.path}
                  className={`text-base py-2.5 h-full text-white font-inter leading-normal transition-colors duration-300 ${
                    isActive
                      ? "text-white font-extrabold"
                      : "text-white font-normal hover:text-[#dadada]"
                  }`}>
                  {item.name}
                  <span
                    className={`self-center translate-x-1/4 w-2/3 absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-white/30 via-white to-white/30 transition-opacity duration-500 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Logo - center on desktop */}
        <div
          className="hidden md:flex hover:cursor-pointer"
          onClick={() => router.push("/")}>
          <Image
            src="/logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="h-fit w-fit"
          />
        </div>

        {/* Mobile hamburger menu */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white"
          aria-label="Toggle menu">
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <span className="flex flex-col px-0 space-y-1.5 py-0 h-5 w-7 bg-transparent items-end justify-end text-white/90">
              <span className="w-full h-0.5 bg-white/90 rounded-full" />
              <span className="w-4/5 h-0.5 bg-white/90 rounded-full" />
              <span className="w-[60%] h-0.5 bg-white/90 rounded-full" />
            </span>
          )}
        </button>

        {/* Second nav items and contact - hidden on mobile */}
        <div className="hidden md:flex gap-7 items-center">
          {navItems2.map((item) => {
            const isActive = pathname === item.path;
            return (
              <div
                key={item.name}
                className="relative group">
                <Link
                  href={item.path}
                  className={`text-base py-2.5 h-full text-white font-inter leading-normal transition-colors duration-300 ${
                    isActive
                      ? "text-white font-extrabold"
                      : "text-white font-normal hover:text-[#dadada]"
                  }`}>
                  {item.name}
                  <span
                    className={`self-center translate-x-1/4 w-2/3 absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-white/30 via-white to-white/30 transition-opacity duration-300 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              </div>
            );
          })}
          <span className="text-muted min-h-6 bg-muted/70 w-[1px]" />
          <Link
            href="/#contact-us"
            onClick={handleNavClick}
            className="h-12 transition-colors duration-300 text-white font-normal hover:text-[#dadada] text-base justify-center items-center gap-1 flex">
            Contact Us
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="absolute top-[70px] left-0 mx-1.5 rounded-4xl right-0 bg-background2 border-b border-white/10 shadow-lg shadow-black/5 rounded-b-2xl overflow-hidden md:hidden z-50 transition-all duration-300 ease-in-out">
          <div className="max-h-[80vh] overflow-y-auto py-4 px-6 flex flex-col gap-4">
            {allNavItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-base py-2 text-white font-inter leading-normal transition-colors duration-300 border-b border-white/10 ${
                    isActive
                      ? "text-white font-extrabold"
                      : "text-white font-normal"
                  }`}
                  onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/#contact-us"
              className="py-3 transition-colors duration-300 text-white font-normal text-base flex items-center gap-1 border-b border-white/10"
              onClick={(e) => {
                handleNavClick(e);
                setIsMenuOpen(false);
              }}>
              Contact Us
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
