import Image from 'next/image';

import Kayak from 'public/images/kayakplaceholder.jpeg';
import Factorio from 'public/images/factorio.avif';
import Girlfriend from 'public/images/girlfriendPlaceholder.webp'
import Hiking from 'public/images/hikingPlaceholder.png'
export default function About() {

  const entries = [
    {
      title: 'Kayaking',
      imageSrc: Kayak,
      altText: 'Person kayaking on a river'
    },
    {
      title: 'Video Games',
      imageSrc: Factorio,
      altText: 'Gaming setup with a computer and controller'
    },
    {
      title: 'Bothering My Girlfriend',
      imageSrc: Girlfriend,
      altText: 'Smiling couple spending time together'
    },
    {
      title: 'Hiking',
      imageSrc: Hiking,
      altText: 'Scenic view of a hiking trail'
    }
  ];


  return (
    <main>
      <div className="flex flex-col md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl 3xl:max-w-[2000px] p-10 xl:p-28 mx-auto">
        {/* About me header */}
        <div className="pb-8">
          <div className="mb-5 text-7xl text-jackson-100 font-bold">About Me</div>
          <div className="text-2xl text-jackson-200">I do plenty of things beyond programming. Here are a few!</div>
        </div>
        {/* Header end */}

        <section className="pb-10 lg:pb-20">
          <div className="container mx-auto">
            {/* flex for entries */}
            <div className="flex flex-wrap">
              {entries.map((entry) => (
                <div key={entry} className="w-full px-4 md:w-1/2 lg:w-1/3 mb-10 hover:scale-110 duration-200 hover:-translate-y-4">
                  <div className="mx-auto lg:max-w-[400px] rounded-xl min-h-[250px]">
                    <div className="relative overflow-hidden rounded-t-xl h-[200px] w-full">
                      <Image
                        src={entry.imageSrc}
                        fill={true}
                        alt={entry.altText}
                      />
                    </div>
                    <div className="flex justify-center content-center bg-jackson-100 h-[80px] rounded-b-xl w-full">
                      <div className="w-1/2 flex content-center justify-center bg-jackson-400 p-1 my-auto mx-auto rounded-full">
                        <h3 className="text-center text-dark hover:text-primary inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                          {entry.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>


  )
}