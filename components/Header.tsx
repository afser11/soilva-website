"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="premium-header">
      <Link className="premium-brand" href="/" onClick={closeMenu}>
        <img src="/assets/soilva-logo-clean.png" alt="Soilva logo" />
      </Link>

      <button
        className="premium-menu"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle navigation menu"
      >
        <span></span><span></span><span></span>
      </button>

      <nav className={open ? "premium-nav open" : "premium-nav"}>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/#products" onClick={closeMenu}>Products</Link>
        <Link href="/about" onClick={closeMenu}>Our Story</Link>
        <Link href="/kandap-process" onClick={closeMenu}>Traditional Process</Link>
        <Link href="/quality" onClick={closeMenu}>Quality</Link>
        <Link href="/recipes" onClick={closeMenu}>Recipes</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
        <Link href="/support" onClick={closeMenu}>Support</Link>
      </nav>

      <div className="premium-actions">
        <a className="nav-action whatsapp-action" href="https://wa.me/919891985126">
          WhatsApp
        </a>
        <a className="nav-action call-action" href="tel:+919560216252">
          Call Now
        </a>
        <a className="nav-action distributor-action" href="/distributor">
          Become Distributor
        </a>
      </div>
    </header>
  );
}
