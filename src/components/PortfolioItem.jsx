import Link from "next/link";

const PortfolioItem = ({
  projectName,
  description,
  slug,
  alt,
  flexReverse,
}) => {
  return (
    <section
      className={`sm:flex flex-row ${
        flexReverse && "flex-row-reverse"
      } justify-between items-center md:justify-start`}
    >
      <div className="sm:w-1/2">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={`images/portfolio/desktop/image-portfolio-${slug}@2x.jpg`}
          />
          <source
            media="(min-width: 500px)"
            srcSet={`images/portfolio/tablet/image-portfolio-${slug}@2x.jpg`}
          />
          <img
            src={`images/portfolio/mobile/image-portfolio-${slug}@2x.jpg`}
            alt="alt"
          />
        </picture>
      </div>
      <div className="flex flex-col sm:ml-10 md:ml-16 xl:ml-32  md:self-stretch justify-between sm:w-5/12 lg:max-w-xs">
        <hr className="mt-10 mb-6 md:mt-0 md:mb-8" />
        <div className="xl:flex flex-col justify-center self-stretch">
          <div>
            <h2 className="font-serif text-40 font-bold leading-none">
              {projectName}
            </h2>
            <p className="mt-6 md:mt-7 leading-loose text-p3">{description}</p>
          </div>

          <div className="mt-5">
            <Link href={`/portfolio/${slug}`}>
              <a className="border p-4  whitespace-no-wrap">VIEW PROJECT</a>
            </Link>
          </div>
        </div>
        <hr className="mt-6 md:mt-12" />
      </div>
    </section>
  );
};

export default PortfolioItem;
