import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Template = ({ children, menuOpen, toggleMenu }) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* page layout */}
      <div className="w-full h-full px-8 pt-8 md:px-10 md:pt-16 xl:px-0">
        <div className="max-w-6xl mx-auto relative">
          <header>
            <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
          </header>
          <div className="mt-10 md:mt-12 xl:mt-16 h-full">{children}</div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Template;
