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
      <section className="pb-16 md:pb-20">
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
      <section className="pb-16 md:pb-20">
        <PortfolioArticle slug="insure">
          <>Insure</>
          <>
            This was a small project which mostly consisted of HTML and CSS. I
            built a fully-responsive landing page. The only JavaScript this
            project required was to enable the toggling of the mobile
            navigation.
          </>
          <button className="border p-4  whitespace-no-wrap">
            VIEW PROJECT
          </button>
        </PortfolioArticle>
      </section>
      <section>
        <PortfolioArticle slug="fylo" reverse>
          <>Fylo</>
          <>
            This project was built in pure HTML and CSS. I had mobile and
            desktop designs to work to and built it so that it was
            fully-responsive. I took a mobile-first approach and used modern CSS
            like Flexbox and Grid for layout purposes.
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
