import Image from 'next/image';
import HeroImage from '../../public/images/JacksonHeadshot.png'

export default function Hero() {


    return (
        <section>
            <div className="md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl p-28 gap-12 text-jackson-200 overflow-hidden lg:flex mx-auto">
                <div className='flex-none space-y-5 max-w-2xl'>
                    <h1 className="text-4xl sm:text-5xl xl:text-7xl 3xl:text-9xl text-jackson-200 font-medium ">
                        Hi, I'm <span className="block font-extrabold xl:text-9xl 3xl:text-[10rem] text-jackson-100 mb-10">Jackson Cozzi</span>
                    </h1>
                    <h2 className="text-2xl xl:text-4xl text-gra-800">
                        I'm a Junior Developer graduating from Clemson University
                    </h2>
                    <div className='flex items-center gap-x-3 sm:text-sm md:text-md lg:text-lg'>
                        <a href="mailto:jtcfred@gmail.com" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white hover:text-black font-medium bg-gray-800 duration-150 hover:bg-jackson-100 hover:scale-105 active:bg-gray-900 rounded-full md:inline-flex">
                            Contact Me
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1FGS2HErf0_PlSOhr7DpB5piCdOxU1b7pDmy_C4T3NaE/edit?usp=sharing" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white hover:text-black font-medium bg-gray-800 duration-150 hover:bg-jackson-100 hover:scale-105 active:bg-gray-900 rounded-full md:inline-flex">
                            Download Resume
                        </a>
                    </div>
                </div>
                <div className="flex-1 md:block w-full flex justify-center items-center">
                    <div className="flex items-center h-full">
                        <Image src={HeroImage} alt="my headshot" className="max-w-xl w-full" />
                    </div>
                </div>
            </div>
        </section>

    )
}