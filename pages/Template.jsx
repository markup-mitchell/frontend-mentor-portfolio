import Navbar from '../components/Navbar';


const Template = ({children, menuOpen, toggleMenu}) => {
  return (
    <>
    {/* page layout */}
    <div className="w-full px-8 pt-8 md:px-10 md:pt-16 xl:px-0 relative">
      <header className="max-w-6xl mx-auto relative">
        <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu}/>
        <div className="mt-10 md:mt-12 xl:mt-16">
            {children}
        </div>
      </header>
    </div>
    
    </>
  )
}

export default Template;