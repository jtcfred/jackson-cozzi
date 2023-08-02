import NextLink from 'next/link'


export default function Navbar() {

    return (

<div>
    <header className="bg-white shadow-lg h-24 hidden md:flex">
      <a href="" className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
        {/* <img className="" src="https://i.ibb.co/W6ZXdqN/2021-10-26-16h20-21.png" alt="" /> */}
        <span className="">Jtcfred</span>
      </a>
      <nav className="header-links contents font-semibold text-base lg:text-lg">
        <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
          <li className="p-3 xl:p-6 active">
            <a href="">
              <span>Home</span>
            </a>
          </li>
          <li className="p-3 xl:p-6">
            <a href="">
              <span>Services</span>
            </a>
          </li>
          <li className="p-3 xl:p-6">
            <a href="">
              <span>About</span>
            </a>
          </li>
          <li className="p-3 xl:p-6">
            <a href="">
              <span>Projects</span>
            </a>
          </li>
          <li className="p-3 xl:p-6">
            <a href="">
              <span>Skills</span>
            </a>
          </li>
          <li className="p-3 xl:p-6">
            <a href="">
              <span>Contacts</span>
            </a>
          </li>
          <li className="p-3 xl:p-6">
            <a href="" className="flex items-center">
              <span>Pages</span>
            </a>
          </li>
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
        <a href="" className="mr-4 lg:mr-6 xl:mr-8">
          
        </a>
        <button className="bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">Contact Me</button>
      </div>
    </header>
</div>
)}
