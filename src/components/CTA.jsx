const { default: ButtonLink } = require('./Links/ButtonLink');

const CTA = () => {
  return (
    <div className="flex flex-col items-center md:flex-row">
      <h2 className="font-serif font-bold leading-tight text-center text-40 text-p3">
        <span className="md:whitespace-no-wrap">Interested in doing</span>{' '}
        <br className="hidden md:block" />
        <span className="md:whitespace-no-wrap"> a project together?</span>
      </h2>
      <div className="hidden w-full mx-8 border-b opacity-25 md:block border-p3" />
      <div className="mt-10 md:mt-0">
        <ButtonLink destination="/contact">CONTACT ME</ButtonLink>
      </div>
    </div>
  );
};

export default CTA;
