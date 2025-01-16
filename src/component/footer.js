import React from 'react';

function Footer() {
  return (
    <footer className="bg-black py-2">
      <div className="container mx-auto flex justify-between items-center text-white">
        {/* Logo on the left */}
        <img
          src="/logo.png"
          alt="Logo"
          className="h-10 w-auto object-contain "
        />

        {/* ABDELALI BAKKA centered */}
        <p className="text-center font-semibold">
          &copy; {new Date().getFullYear()} ABDELALI BAKKA
        </p>

        {/* All rights reserved on the right */}
        <span className="text-right">All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
