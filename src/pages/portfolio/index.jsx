import PortfolioArticle from '../../components/PortfolioArticle';

const Portfolio = () => {
  return (
    <>
      <section className="pb-16 md:pb-20">
        <PortfolioArticle slug="manage">
          <>Manage</>
          <>
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            testimonial slider.
          </>
          <button className="border p-4  whitespace-no-wrap">
            VIEW PROJECT
          </button>
        </PortfolioArticle>
      </section>
      <section>
        <PortfolioArticle slug="bookmark" reverse>
          <>Bookmark</>
          <>
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            features section.
          </>
          <button className="border p-4  whitespace-no-wrap">
            VIEW PROJECT
          </button>
        </PortfolioArticle>
      </section>
    </>
  );
};

export default Portfolio;
