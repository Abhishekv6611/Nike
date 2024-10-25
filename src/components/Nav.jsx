import { useState } from 'react';
import { hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img className='mt-5' src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        {/* Desktop Navigation Links */}
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a className='font-montserrat leading-normal text-lg text-slate-gray' href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className='hidden max-lg:block'>
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md z-20 py-6 max-lg:flex flex-col items-center gap-4 lg:hidden">
            {navLinks.map((item) => (
              <a key={item.label} href={item.href} className='font-montserrat text-lg text-slate-gray py-2'>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
