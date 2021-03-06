import Head from 'next/head';
import HeroImage from './HeroImage';
import ProjectSummary from './ProjectSummary';
import ProjectBackground from './ProjectBackground';
import NextPrevProject from './NextPrevProject';
import CTA from '../CTA';

export default function DetailsTemplate({
  projectName,
  heroAlt,
  summary_heading,
  summary_text,
  background_text,
  static_preview_1_alt,
  static_preview_2_alt,
  next_project,
  previous_project
}) {
  return (
    <>
      <Head>
        <noscript>
          <link rel="stylesheet" href="noscript.css" />
        </noscript>
      </Head>
      <HeroImage projectName={projectName} alt={heroAlt} />
      <div className="mt-10 lg:mt-32 lg:flex ">
        <section className="lg:w-1/3">
          <ProjectSummary heading={summary_heading} text={summary_text} />
        </section>
        <section className="mt-12 md:mt-10 lg:mt-0 lg:w-2/3 lg:ml-32">
          <ProjectBackground
            projectName={projectName}
            text={background_text}
            static_preview_1_alt={static_preview_1_alt}
            static_preview_2_alt={static_preview_2_alt}
          />
        </section>
      </div>
      <nav className="pt-16 md:pt-20 lg:pt-16 ">
        <NextPrevProject
          next_project={next_project}
          previous_project={previous_project}
        />
      </nav>
      <aside className="pt-16 pb-20 md:pt-20 md:pb-24 xl:pt-32 xl:pb-32">
        <CTA />
      </aside>
    </>
  );
}
