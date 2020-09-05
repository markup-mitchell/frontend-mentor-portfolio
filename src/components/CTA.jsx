const CTA = () => {
  return (
    <div className="flex flex-col items-center pt-24 pb-24 xl:py-40 md:flex-row">
      <h2 className="text-40 font-serif text-center leading-tight font-bold text-p3">
        <span className="md:whitespace-no-wrap">Interested in doing</span>{' '}
        <br className="hidden md:block" />
        <span className="md:whitespace-no-wrap"> a project together?</span>
      </h2>
      <div className="hidden md:block border-b border-p3 opacity-25 w-full mx-8" />
      <div className="mt-10 md:mt-0">
        <button className="border p-4 w-full whitespace-no-wrap">
          CONTACT ME
        </button>
      </div>
    </div>
  );
};

export default CTA;
