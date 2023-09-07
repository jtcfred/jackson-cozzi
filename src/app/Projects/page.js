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
      <div className="flex flex-col py-4 mx-20">
        <div className="py-4">
          <div className="py-8">
            <div className="my-5 text-7xl text-jackson-100 font-bold">Projects</div>
            <div className="text-2xl text-jackson-200">Listed below are both personal and work projects (ones that I am allowed to disclose)</div>
          </div>
        </div>
        {/* This is the beginning of the flex */}
        <div className="flex flex-col flex-wrap px-20 md:px-10 md:flex-row justify-evenly gap-6">
          {/* This is the beginning of the card */}
          {CardInformation.map((card) => (
            <div className="h-full max-w-lg">
              <Image
                src={card.picture}
                width={500}
                height={500}
                alt={card.alt}
                className="rounded-t-xl"
              />
              {/* <img src={card.picture} className="rounded-t-xl" /> */}
              <div className="px-9 pt-10 pb-14 bg-jackson-200 rounded-b-lg">
                <div className="text-black space-y-4">
                  <h3 className="text-xl font-bold lead-xl">{card.title}</h3>
                  <div className="text-lg">{card.subtitle}</div>
                </div>
                <div className="flex justify-between pt-8">
                  {/* This is the technology list */}
                  <ul className="flex flex-col gap-y-2.5">
                    {card.technologies.map((tech) => (
                      <li className="flex space-x-3 text-white" key={tech.label}>
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