import HeroImage from '../../components/DetailPages/HeroImage';
import ProjectSummary from '../../components/DetailPages/ProjectSummary';
import ProjectBackground from '../../components/DetailPages/ProjectBackground';

export default function Manage() {
  return (
    <>
      <HeroImage alt="" />
      <div className="mt-10 lg:mt-32 lg:flex ">
        <section className="lg:w-1/3">
          <ProjectSummary
            heading="Manage"
            text="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider."
          />
        </section>
        <section className="mt-12 md:mt-10 lg:mt-0 lg:w-2/3 lg:ml-32">
          <ProjectBackground
            projectName="manage"
            text="This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style."
          />
        </section>
      </div>
    </>
  );
}
