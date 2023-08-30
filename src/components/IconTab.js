"use client"
// import NextLink from 'next/link'
import { AiFillGithub, AiFillLinkedin }  from 'react-icons/ai'

export default function IconTab() {

    return (
        <nav className="hidden xl:contents">
            <ul className="flex items-center mr-4 lg:mr-6 xl:mr-8 text-5xl">
                <li className="p-1 hover:text-jackson-100">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/jtcfred" className="inline-block rounded-full border-double border-2 border-jackson-300 p-2 hover:shadow-lg  duration-200 hover:-translate-y-0.5">
                        <AiFillGithub/>
                    </a>
                </li>
                <li className="p-1 hover:text-jackson-100">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jacksoncozzi/" className="inline-block rounded-full border-2 border-jackson-300 p-2 hover:shadow-lg duration-200 hover:-translate-y-0.5">
                        <AiFillLinkedin/>
                    </a>
                </li>
            </ul>
        </nav>
    )
}