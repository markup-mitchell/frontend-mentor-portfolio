import Navbar from '../components/Navbar';


const Template = ({children}) => {
  return (
    <>
    <div className="">
      <Navbar />
      <div className="">
          {children}
      </div>
    </div>
    
    </>
  )
}

export default Template;