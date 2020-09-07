import ButtonLink from '../components/Links/ButtonLink';

const ProjectImage = ({ slug }) => {
  return (
    <div className="image-wrapper relative w-full sm:w-1/2 pb-r92 sm:pb-0 flex  xl:h-auto">
      <picture>
        <source media="(min-width: 1024px)" srcSet="" />
        <source media="(min-width: 1024px)" srcSet="" />
        <source media="(min-width: 1024px)" srcSet="" />
        <img
          src={`images/portfolio/desktop/image-portfolio-${slug}@2x.jpg`}
          className="absolute image-placeholder w-full h-full object-cover object-top sm:relative"
        />
      </picture>
    </div>
  );
};

const ProjectSummary = ({ children, slug }) => {
  return (
    <div className="contentWrapper mt-6 sm:mt-0  w-full xl:flex flex-col xl:justify-between sm:w-1/2 lg:pl-24 xl:pl-32 self-stretch">
      <div className="lg:max-w-xs flex flex-col h-full justify-between">
        <hr className="text-p3 m-0 opacity-25" />
        <div className="py-6 md:mt-8 md:mb-12 lg:my-0">
          <h2 className="font-serif text-40 font-bold leading-none">
            {children[0]}
          </h2>
          <p className="mt-6 md:mt-7 leading-loose text-p3">{children[1]}</p>
          <div className="mt-5">
            <ButtonLink destination={`/portfolio/${slug}`}>
              VIEW PROJECT
            </ButtonLink>
          </div>
        </div>
        <hr className="text-p3 opacity-25 m-0" />
      </div>
    </div>
  );
};

const PortfolioArticle = ({ reverse, children, slug }) => {
  return (
    <div
      className={`space-y-6 sm:space-y-0 flex ${
        reverse ? 'flex-col-reverse' : 'flex-col'
      } sm:flex-row items-center sm:space-x-12`}
    >
      {reverse ? (
        <>
          <ProjectSummary slug={slug}>{children}</ProjectSummary>
          <ProjectImage slug={slug} />
        </>
      ) : (
        <>
          <ProjectImage slug={slug} />
          <ProjectSummary slug={slug}>{children}</ProjectSummary>
        </>
      )}
    </div>
  );
};

export default PortfolioArticle;
