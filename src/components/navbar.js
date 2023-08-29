import NextLink from 'next/link'


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
              <li key={link.label} className="p-3 xl:p-6">
                <NextLink href={link.href}>
                  {link.label}
                </NextLink>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="hidden xl:contents">
          <ul className="flex items-center mr-4 lg:mr-6 xl:mr-8">
            <li className="p-1">
              <a href="" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">

              </a>
            </li>
            <li className="p-1">
              <a href="" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">

              </a>
            </li>
            <li className="p-1">
              <a href="" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">

              </a>
            </li>
            <li className="p-1">
              <a href="" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">

              </a>
            </li>
          </ul>
        </nav>
        <div className="border flex items-center px-4 lg:px-6 xl:px-8">
          <a href="mailto:jtcfred@gmail.com" className="bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">Contact Me</a>
        </div>
      </header>
    </div>
  )
}
