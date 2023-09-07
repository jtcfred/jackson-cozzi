import NextLink from 'next/link'
import Image from 'next/image'

import Mike from 'public/images/mike.jpg'
import NextSVG from 'public/images/svg/nextjs.svg'
import CSSSVG from 'public/images/svg/css.svg'
import javascriptSVG from 'public/images/svg/javascript.svg'
import mongoSVG from 'public/images/svg/mongodb.svg'
import tailwindSVG from 'public/images/svg/tailwind.svg'
import vercelSVG from 'public/images/svg/vercel.svg'
export default function Projects() {

  const CardInformation = [
    {
      title: 'Jordan\'s Birthday Website',
      subtitle: 'I created a website to celebrate my girlfriend\'s birthday! Friends could add birthday wishes, play a quiz, and add songs to a birthday playlist',
      picture: Mike,
      alt: '',
      technologies: [
        { label: 'NextJS', icon: NextSVG },
        { label: 'MongoDB', icon: mongoSVG },
        { label: 'Vercel', icon: vercelSVG },
      ],
      link: ''
    },
    {
      title: 'UPIC Student Story',
      subtitle: 'I created a webpage to highlight the Clemson Friday Morning Swim Club in collaboration with some Clemson designers',
      picture: Mike,
      alt: '',
      technologies: [
        { label: 'Javascript', icon: javascriptSVG },
        { label: 'CSS', icon: CSSSVG }
      ],
      link: ''
    },
    {
      title: 'This Website!',
      subtitle: 'I created this website to highlight some of my strengths and accomplishments',
      picture: Mike,
      alt: '',
      technologies: [
        { label: 'NextJS', icon: NextSVG },
        { label: 'Tailwind', icon: tailwindSVG }
      ],
      link: ''
    },
  ];

  return (
    <main>
      <div className="flex flex-col md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl 3xl:max-w-[2000px] p-10 xl:p-28 mx-auto">
        <div className="pb-8">
          <div className="mb-5 text-7xl text-jackson-100 font-bold">Projects</div>
          <div className="text-2xl text-jackson-200">Listed below are both personal and work projects (ones that I am allowed to disclose)</div>
        </div>
        {/* This is the beginning of the flex */}
        <div className="flex flex-col flex-wrap px-20 md:flex-row gap-4 xl:gap-10 justify-center">
          {/* This is the beginning of the card */}
          {CardInformation.map((card) => (
            <div key={card.title} className="md:max-w-sm lg:max-w-md xl:max-w-lg xl:h-[861px]">
              <div className="w-full h-3/5 relative">
                <Image
                  src={card.picture}
                  fill={true}
                  alt={card.alt}
                  className="rounded-t-xl"
                />
              </div>
              <div className="flex flex-col justify-between px-9 pt-10 pb-14 bg-jackson-200 rounded-b-lg h-2/5">
                <div className="text-black space-y-4">
                  <h3 className="text-xl font-bold lead-xl">{card.title}</h3>
                  <div className="text-lg">{card.subtitle}</div>
                </div>
                <div className="flex justify-between pt-8">
                  {/* This is the technology list */}
                  <ul className="flex flex-col gap-y-2.5">
                    {card.technologies.map((tech) => (
                      <li className="flex space-x-3 text-black" key={tech.label}>
                        <Image width="50" height="50" src={tech.icon} className="w-6 h-6" />
                        <span className="paragraph-l font-bold">{tech.label}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col justify-end">
                    <a href={card.link} className="py-3 px-6 bg-jackson-100 text-primary-200 paragraph-m  duration-200 hover:-translate-y-0.5 hover:scale-110 rounded-full">Check it out!</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}