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
        <section className="mb-24 sm:relative xl:pb-40">
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
              className="object-cover w-full"
            ></img>
          </picture>
          <div className="bottom-0 left-0 max-w-lg bg-white sm:absolute sm:">
            <div className="pt-6 pb-8 sm:pt-11 sm:pb-12 sm:pr-11 xl:pb-11">
              <h1 className="font-serif font-bold leading-none tracking-tight text-p3 text-40 xl:text-50 xl:tracking-normal">
                Hey, I'm Alex Spencer and I love building beautiful websites
              </h1>
            </div>

            <ButtonLink destination="#about_me">About Me</ButtonLink>
          </div>
        </section>

        <section className="justify-between sm:flex md:justify-start">
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
              className="object-cover object-right w-full h-full md:flex-shrink-0"
              alt="Alex Spencer in profile"
            ></img>
          </picture>

          <div className="flex flex-col justify-between w-full sm:ml-8 md:ml-16 md:max-w-xs lg:max-w-sm lg:ml-24 xl:ml-32">
            <div className="my-8 border-b opacity-25 sm:mt-0 border-p3" />
            <div>
              <h2
                id="about_me"
                className="font-serif font-bold leading-none tracking-tight text-40 text-p3"
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
              <button className="p-4 border">go to portfolio</button>
            </div>
            <div className="mt-8 border-b opacity-25 border-p3" />
          </div>
        </section>
        <section className="pt-32 pb-24 md:py-24 xl:py-40">
          <CTA />
        </section>
      </main>
    </div>
  );
}
