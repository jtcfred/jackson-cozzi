import Image from 'next/image';

import Kayak from 'public/images/kayakplaceholder.jpeg';
import Factorio from 'public/images/factorio.avif';
import Girlfriend from 'public/images/girlfriendPlaceholder.webp'
import Hiking from 'public/images/hikingPlaceholder.png'
export default function About() {



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
            <div class="-mx-4 flex flex-wrap">
              {/* First Entry */}
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="mx-auto mb-10 max-w-[370px]">
                  <div class="mb-8 overflow-hidden rounded">
                    <Image
                      src={Kayak}
                      alt="image"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                      Kayakking
                    </h3>
                  </div>
                </div>
              </div>
              {/* End of Entry */}
              {/* First Entry */}
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="mx-auto mb-10 max-w-[370px]">
                  <div class="mb-8 overflow-hidden rounded">
                    <Image
                      src={Factorio}
                      alt="image"
                    />
                  </div>
                  <div>
                    <h3 className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                      Video Games
                    </h3>
                  </div>
                </div>
              </div>
              {/* End of Entry */}
              {/* First Entry */}
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="mx-auto mb-10 max-w-[370px]">
                  <div class="mb-8 overflow-hidden rounded">
                    <Image
                      src={Girlfriend}
                      alt="image"
                    />
                  </div>
                  <div>
                    <h3 className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                      Bothering My Girlfriend
                    </h3>
                  </div>
                </div>
              </div>
              {/* End of Entry */}
              {/* First Entry */}
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="mx-auto mb-10 max-w-[370px]">
                  <div class="mb-8 overflow-hidden rounded">
                    <Image
                      src={Hiking}
                      alt="image"
                    />
                  </div>
                  <div>
                    <h3 className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                      Hiking
                    </h3>
                  </div>
                </div>
              </div>
              {/* End of Entry */}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}