import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import { logo } from "../../assets/home";

interface NavLinkData {
  name: string;
  to: string;
}

const navLinks: NavLinkData[] = [
  { name: "Home", to: "/" },
  { name: "Dashboard", to: "/dashboard" },
  { name: "Events", to: "/events" },
  { name: "News", to: "/news" },
  { name: "FAQs", to: "/faqs" },
  { name: "Contact Us", to: "/contact" },
  { name: "Calendar", to: "/calendar" },
  { name: "Wishlist", to: "/wishlist" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-2 z-40">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex gap-4 items-center">
            <Link to="/">
              <img className="h-[40px] w-[140px]" src={logo} alt="Workflow" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    to={link.to}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/auth/login"
            className="hidden md:block hover:bg-button-primary hover:text-white px-4 py-1 rounded-md text-sm"
          >
            Log In / Signup
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden bg-gray-800 p-2 px-3 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span className="sr-only">Open main menu</span>
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden transition-all" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-black">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/auth/login"
                className="bg-button-primary text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Log In / Signup
              </Link>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
