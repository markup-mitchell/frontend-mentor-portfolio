export default function Manage() {
  return (
    <>
      {/* <picture>
        <source />
        <source />
        <source /> */}
      <img src="../images/detail/mobile/image-manage-hero@2x.jpg" alt="" />
      {/* </picture> */}
      <div className="xl:w-1/2">
        <div className="mt-10 xl:mt-32 ">
          <hr className="m-0 text-p3  opacity-25" />
          <div className="contentWrapper py-6 sm:py-8 xl:py-12 sm:mt-0  w-full flex-col md:flex md:flex-row md:space-x-3">
            <div className="flex flex-col md:w-1/2 xl:w-full">
              <h2 className="font-serif text-40 font-bold leading-none">
                Manage
              </h2>
              <div className="md:hidden xl:block mt-6 md:mt-4">
                <p className="leading-loose text-p3 ">
                  This project required me to build a fully responsive landing
                  page to the designs provided. I used HTML5, along with CSS
                  Grid and JavaScript for the areas that required interactivity,
                  such as the testimonial slider.
                </p>
              </div>
              <div className="mt-6 md:mt-4">
                <p className="text-p1 text-xs font-bold">
                  Interaction Design / Front End Development <br /> HTML / CSS /
                  JS
                </p>
              </div>
              <div className="mt-6 md:mt-4">
                {' '}
                <button className="border p-4">go to portfolio</button>
              </div>
            </div>
            <div className="hidden md:block xl:hidden md:w-1/2 xl:w-full mt-6 md:mt-0">
              <p className=" bg-s2 leading-loose text-p3">
                This project required me to build a fully responsive landing
                page to the designs provided. I used HTML5, along with CSS Grid
                and JavaScript for the areas that required interactivity, such
                as the testimonial slider.
              </p>
            </div>
          </div>
          <hr className="text-p3 opacity-25 m-0" />
        </div>
      </div>
    </>
  );
}
