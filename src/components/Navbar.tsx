"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BRAND_GRADIENTS, BUTTON_GRADIENTS, OVERLAY_GRADIENTS } from "@/constants/theme";
import {
  Phone,
  Calendar as CalendarIcon,
  Menu,
  X,
  ChevronDown,
  Mountain,
  Camera,
  Star,
  BookOpen,
  Home,
  MapPin,
  Users,
} from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ItineraryBuilderTrigger } from "@/components/itinerary-builder/ItineraryBuilderTrigger";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const navbarOpacity = useTransform(scrollY, [0, 100], [0.98, 1]);
  const blur = useTransform(scrollY, [0, 100], [0, 10]);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "HOME", href: "/", icon: Home },
    {
      name: "TOURS",
      href: "/tours",
      icon: Mountain,
      dropdown: [
        { name: "Kashmir Tours", href: "/tours?search=Kashmir" },
        { name: "Special Packages", href: "/tours?search=Special" },
        { name: "Honeymoon Tours", href: "/tours?search=Honeymoon" },
      ],
    },
    {
      name: "DESTINATIONS",
      href: "/destinations",
      icon: MapPin,
      dropdown: [
        { name: "Jammu", href: "/destinations/jammu" },
        { name: "Kashmir", href: "/destinations/kashmir" },
        // { name: "Leh-Ladakh", href: "/destinations/leh-ladakh" },
      ],
    },
    // { name: "Gallery", href: "/gallery", icon: Camera },
    { name: "ABOUT US", href: "/about", icon: Users },
    // { name: "Reviews", href: "/reviews", icon: Star },
    // { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "CONTACT", href: "/contact", icon: Phone },
  ];

  return (
    <>
      <motion.nav
        style={{
          opacity: navbarOpacity,
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(27,165,184,0.12)]"
            : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-3 cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src="/logo_header.svg"
                    alt="Journeu Logo"
                    className="w-52 h-12 object-contain"
                  />
                </div>
                <div>
                  {/* <h1 className="text-2xl font-ubuntu font-bold bg-gradient-to-r from-[#1BA5B8] via-[#0A4D5C] to-[#1BA5B8] bg-clip-text text-transparent">
                    Journeu
                  </h1> */}
                  {/* <p className="text-xs text-gray-600 font-medium -mt-0.5">
                    Kashmir & Beyond
                  </p> */}
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 ml-auto">
              {navigationItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.a
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 group/nav ${
                      mounted && pathname === item.href
                        ? "text-[#1BA5B8]"
                        : "text-gray-700 hover:text-[#1BA5B8]"
                    }`}
                  >
                    <item.icon className="w-4 h-4 group-hover/nav:scale-110 transition-transform" />
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown className="w-3 h-3 group-hover/nav:rotate-180 transition-transform" />
                    )}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${BRAND_GRADIENTS.primary}`}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_12px_40px_rgba(27,165,184,0.2)] border border-gray-100 overflow-hidden"
                    >
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem, idx) => (
                          <motion.a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className={`flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#1BA5B8] hover:${BUTTON_GRADIENTS.subtleHover} transition-all group/dropdown`}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1BA5B8] mr-3 group-hover/dropdown:scale-150 transition-transform" />
                            {dropdownItem.name}
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons & Mobile Menu */}
            <div className="flex items-center space-x-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="hidden md:flex items-center space-x-3"
              >
                <ItineraryBuilderTrigger
                  variant="primary"
                  size="md"
                  showIcon={true}
                  className="font-semibold"
                >
                  Build Trip
                </ItineraryBuilderTrigger>
                {/* <Button className={`${BUTTON_GRADIENTS.primary} hover:shadow-[0_8px_24px_rgba(27,165,184,0.4)] transition-all duration-300 font-semibold px-6 group relative overflow-hidden`}>
                  <motion.div
                    className={`absolute inset-0 ${BUTTON_GRADIENTS.primaryHover} opacity-0 group-hover:opacity-20 transition-opacity`}
                    animate={{
                      x: [-200, 200],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "linear",
                    }}
                  />
                  <CalendarIcon className="w-4 h-4 mr-2 relative z-10" />
                  <span className="relative z-10">Book Now</span>
                </Button> */}
              </motion.div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-[#1BA5B8] hover:text-[#0A4D5C] border-2 border-[#1BA5B8] hover:border-[#0A4D5C] rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navigationItems.map((item, index) => (
                <div key={item.name}>
                  <motion.a
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:text-[#1BA5B8] hover:${BUTTON_GRADIENTS.subtleHover} transition-all font-medium`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </motion.a>
                  {item.dropdown && (
                    <div className="ml-8 mt-1 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-[#1BA5B8] transition-colors"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <ItineraryBuilderTrigger
                  variant="outline"
                  size="md"
                  showIcon={true}
                  className="w-full font-semibold justify-center"
                >
                  Build Your Trip
                </ItineraryBuilderTrigger>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
}
