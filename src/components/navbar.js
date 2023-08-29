import NextLink from 'next/link'
import IconTab from '@/components/IconTab.js'

export default function Navbar() {

  const Links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/About' },
    { label: 'Projects', href: '/Projects' },
    { label: 'Skills', href: '/Skills' },
  ];

  return (

    <div>
      <header className="bg-white shadow-lg h-24 hidden md:flex">
        <nav className="header-links contents font-semibold text-base lg:text-lg">
          <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
            {Links.map((link) => (
              <li key={link.label} className="p-3 xl:p-6 ">
                <NextLink href={link.href} className="hover:border-2 p-2 border-jackson-100">
                  {link.label}
                </NextLink>
              </li>
            ))}
          </ul>
        </nav>
        <IconTab/>
        <div className="border flex items-center px-4 lg:px-6 xl:px-8">
          <a href="mailto:jtcfred@gmail.com" className="transition bg-black hover:bg-jackson-100 hover:scale-105 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">Contact Me</a>
        </div>
      </header>
    </div>
  )
}
