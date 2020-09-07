import HeroImage from '../../components/DetailPages/HeroImage';
import ProjectSummary from '../../components/DetailPages/ProjectSummary';
import ProjectBackground from '../../components/DetailPages/ProjectBackground';

export default function DetailsTemplate({
  projectName,
  heroAlt,
  summary_heading,
  summary_text,
  background_text,
  static_preview_1_alt,
  static_preview_2_alt
}) {
  return (
    <>
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
    </>
  );
}
