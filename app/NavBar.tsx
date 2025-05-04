'use client';
import React from 'react'
import Link from 'next/link'
import { FaBug } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import classnames from 'classnames';

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "issues" }
  ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><FaBug /></Link>
        <ul className='flex space-x'>
          {links.map(link =>
            <Link 
            className={classnames({
              'text-zinc-900': currentPath === link.href,
              'text-zinc-500': currentPath !== link.href,
              'hover:text-zinc-800, transition-colors': true
            })}
            key={link.href}
            href={link.href}>{link.label}
            </Link> )}
        </ul>
    </nav>
  )
}

export default NavBar