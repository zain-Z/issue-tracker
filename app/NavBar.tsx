import React from 'react'
import Link from 'next/link'
import { FaBug } from "react-icons/fa";

const NavBar = () => {
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
            className='text-zinc-500 hover:text-zinc-800 transition-colors'
            key={link.href}
            href={link.href}>{link.label}
            </Link> )}
        </ul>
    </nav>
  )
}

export default NavBar