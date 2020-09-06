import Summary from '../../components/DetailPages/Summary';
import HeroImage from '../../components/DetailPages/HeroImage';

export default function Manage() {
  return (
    <>
      <HeroImage />
      <Summary
        heading="Manage"
        text="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider."
      />
    </>
  );
}
