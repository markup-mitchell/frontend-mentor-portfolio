import PortfolioItem from "../../components/PortfolioItem";

const Portfolio = () => {
  return (
    <>
      <PortfolioItem
        projectName="Manage"
        description="This project required me to build a fully responsive landing page
      to the designs provided. I used HTML5, along with CSS Grid and
      JavaScript for the areas that required interactivity, such as the
      testimonial slider."
        slug="manage"
      />
      <PortfolioItem
        projectName="Insure"
        description="This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation."
        slug="insure"
        flexReverse
      />
    </>
  );
};

export default Portfolio;
