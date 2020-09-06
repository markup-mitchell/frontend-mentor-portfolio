export default function ({ heading, text }) {
  return (
    <div className="lg:w-1/2">
      <div className="mt-10 lg:mt-32 ">
        <hr className="m-0 text-p3  opacity-25" />
        <div className="contentWrapper py-6 sm:py-8 lg:py-12 sm:mt-0  w-full flex-col md:flex md:flex-row md:space-x-3">
          <div className="flex flex-col md:w-1/2 lg:w-full">
            <h2 className="font-serif text-40 font-bold leading-none">
              {heading}
            </h2>
            <div className="md:hidden lg:block mt-6 md:mt-4">
              <p className="leading-loose text-p3 ">{text}</p>
            </div>
            <div className="mt-6 md:mt-4">
              <p className="text-p1 text-xs font-bold">
                Interaction Design / Front End Development <br /> HTML / CSS /
                JS
              </p>
            </div>
            <div className="mt-6 md:mt-4">
              <button className="font-semibold border-p3  border py-4 px-8 text-xs tracking-2 uppercase">
                visit website
              </button>
            </div>
          </div>
          <div className="hidden md:block lg:hidden md:w-1/2 lg:w-full mt-6 md:mt-0">
            <p className=" leading-loose text-p3">{text}</p>
          </div>
        </div>
        <hr className="text-p3 opacity-25 m-0" />
      </div>
    </div>
  );
}
