import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LayoutDashboard, ShoppingCart, Newspaper, Phone, MessageSquare } from 'lucide-react';

const NavLink = ({ to, children, icon, onClick }) => {
  const Icon = icon;
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center space-x-2 px-3 py-2 text-gray-200 hover:bg-brand-primary/50 hover:text-white rounded-md transition-colors duration-200"
    >
      <Icon size={20} />
      <span>{children}</span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-brand-dark shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-white flex items-center">
            Village<span className="text-brand-primary">Connect</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink to="/" icon={LayoutDashboard}>Dashboard</NavLink>
            <NavLink to="/marketplace" icon={ShoppingCart}>Marketplace</NavLink>
            <NavLink to="/news" icon={Newspaper}>News & Events</NavLink>
            <NavLink to="/forum" icon={MessageSquare}>Forum</NavLink>
            <NavLink to="/emergency" icon={Phone}>Emergency Contacts</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-brand-dark">
          <NavLink to="/" icon={LayoutDashboard} onClick={closeMenu}>Dashboard</NavLink>
          <NavLink to="/marketplace" icon={ShoppingCart} onClick={closeMenu}>Marketplace</NavLink>
          <NavLink to="/news" icon={Newspaper} onClick={closeMenu}>News & Events</NavLink>
          <NavLink to="/forum" icon={MessageSquare} onClick={closeMenu}>Forum</NavLink>
          <NavLink to="/emergency" icon={Phone} onClick={closeMenu}>Emergency Contacts</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

