

export default function Hero() {

    
    return (
        <section>
            <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
                <div className='flex-none space-y-5 max-w-xl'>
                    <h1 className="text-4xl text-gray-800 font-medium sm:text-5xl">
                        Hi, I'm <span className="font-extrabold">Jackson Cozzi</span>
                    </h1>
                    <h2 className="text-2xl text-gra-800">
                        I'm a Junior Developer graduating from Clemson University
                    </h2>
                    <div className='flex items-center gap-x-3 sm:text-sm'>
                        <a href="mailto:jtcfred@gmail.com" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-jackson-100 hover:scale-105 active:bg-gray-900 rounded-full md:inline-flex">
                            Contact Me
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1FGS2HErf0_PlSOhr7DpB5piCdOxU1b7pDmy_C4T3NaE/edit?usp=sharing" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-jackson-100 hover:scale-105 active:bg-gray-900 rounded-full md:inline-flex">
                            Download Resume
                        </a>
                    </div>
                </div>
                <div className='flex-1 hidden md:block'>
                    {/* Replace with your image */}
                    <img src="https://res.cloudinary.com/floatui/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669333920/undraw_progressive_app_m-9-ms_oftfv5.jpg" className="max-w-xl" />
                </div>
            </div>
        </section>

    )
}