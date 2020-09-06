import Head from 'next/head';
import CTA from '../components/CTA';
import ButtonLink from '../components/Links/ButtonLink';

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-auto">
        <section className="sm:relative mb-24 xl:pb-40">
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet="images/homepage/desktop/image-homepage-hero@2x.jpg"
            />
            <source
              media="(min-width: 1024px)"
              srcSet="images/homepage/desktop/image-homepage-hero.jpg"
            />
            <source
              media="(min-width: 426px)"
              srcSet="images/homepage/tablet/image-homepage-hero.jpg"
            />
            <img
              src="images/homepage/mobile/image-homepage-hero@2x.jpg"
              alt="stock image of a desktop computer screen"
              className="w-full object-cover"
            ></img>
          </picture>
          <div className="sm:absolute bottom-0 left-0 bg-white sm: max-w-lg">
            <div className="pt-6 pb-8 sm:pt-11 sm:pb-12 sm:pr-11 xl:pb-11">
              <h1 className="font-serif text-p3 text-40 xl:text-50 font-bold tracking-tight xl:tracking-normal leading-none">
                Hey, I'm Alex Spencer and I love building beautiful websites
              </h1>
            </div>

            <ButtonLink destination="#about_me">About Me</ButtonLink>
          </div>
        </section>

        <section className="sm:flex justify-between md:justify-start">
          <picture className="object-contain">
            <source
              media="(min-width: 1440px)"
              srcSet="images/homepage/desktop/image-homepage-profile@2x.jpg"
            />
            <source
              media="(min-width: 1024px)"
              srcSet="images/homepage/desktop/image-homepage-profile.jpg"
            />
            <source
              media="(min-width: 640px)"
              srcSet="images/homepage/tablet/image-homepage-profile.jpg"
            />
            <img
              src="images/homepage/mobile/image-homepage-profile.jpg"
              className="h-full w-full object-cover object-right md:flex-shrink-0"
              alt="Alex Spencer in profile"
            ></img>
          </picture>

          <div className="flex flex-col justify-between w-full sm:ml-8 md:ml-16 md:max-w-xs lg:max-w-sm lg:ml-24 xl:ml-32">
            <div className="border-b my-8 sm:mt-0 border-p3 opacity-25" />
            <div>
              <h2
                id="about_me"
                className="text-40 text-p3 font-serif font-bold tracking-tight leading-none"
              >
                About me
              </h2>

              <p className="leading-7 pt-7 xl:text-xl text-p3">
                I’m a junior front-end developer looking for a new role in an
                exciting company. I focus on writing accessible HTML, using
                modern CSS practices and writing clean JavaScript. When writing
                JavaScript code, I mostly use React, but I can adapt to whatever
                tools are required. I’m based in London, UK, but I’m happy
                working remotely and have experience in remote teams. When I’m
                not coding, you’ll find me outdoors. I love being out in nature
                whether that’s going for a walk, run or cycling. I’d love you to
                check out my work.
              </p>
            </div>

            <div className="mt-10">
              <button className="border p-4">go to portfolio</button>
            </div>
            <div className="border-b mt-8 border-p3 opacity-25" />
          </div>
        </section>
        <section>
          <CTA />
        </section>
      </main>
    </div>
  );
}
