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
      <header className="bg-jackson-200 shadow-lg h-24 hidden md:flex">
        <nav className="header-links contents font-semibold text-base lg:text-2xl">
          <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
            {Links.map((link) => (
              <li key={link.label} className="m-3 xl:m-5 duration-200 hover:-translate-y-0.5 hover:scale-110 hover:text-jackson-100">
                <NextLink href={link.href} className="p-2 xl:p-5">
                  {link.label}
                </NextLink>
              </li>
            ))}
          </ul>
        </nav>
        <IconTab/>
        <div className="border-l-2 border-jackson-300 flex items-center px-4 lg:px-6 xl:px-8">
          <a href="mailto:jtcfred@gmail.com" className="transition bg-jackson-100 hover:scale-110 text-black font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">Contact Me</a>
        </div>
      </header>
    </div>
  )
}
