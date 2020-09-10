import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Template = ({ children, menuOpen, toggleMenu }) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-t3">
      {/* page layout */}
      <div className="w-full h-full px-8 pt-8 md:px-10 md:pt-16 xl:px-0">
        <div className="relative max-w-6xl mx-auto">
          <header>
            <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
          </header>
          <div className="h-full mt-10 md:mt-12 xl:mt-16">{children}</div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Template;
