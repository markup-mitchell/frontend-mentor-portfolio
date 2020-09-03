import MenuLinkMobile from '../components/Links/MenuLinkMobile';

const Footer = () => {
  return (
    <footer className="py-12 md:py-6 xl:py-8 bg-p3 px-8 pt-8 md:px-10 xl:px-0 w-full "
    >
      <div className="py-2 md:py-0 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        <div className="flex flex-col items-center md:flex-row">
      <svg xmlns="http://www.w3.org/2000/svg"
      className="text-white" width="61" height="32"><path fill="currentColor" fillRule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/></svg>
        <div className="mt-2  md:mt-0 pb-10 md:pb-0 bg-p3 text-s1 flex flex-col md:flex-row items-center">
          <div className="mt-8 md:mt-0 md:ml-12">
            <MenuLinkMobile href="/">
              HOME
            </MenuLinkMobile>
          </div>
          <div className="mt-8 md:mt-0 md:ml-10">
            <MenuLinkMobile href="/portfolio">
              PORTFOLIO
            </MenuLinkMobile>
          </div>
          <div className="mt-8 md:mt-0 md:ml-10">
            <MenuLinkMobile href="/contact">
              CONTACT ME
            </MenuLinkMobile>
          </div>
        </div>
        </div>
        <div className="flex text-white items-center">
        <svg 
        xmlns="http://www.w3.org/2000/svg" width="25" height="24"><path fill="currentColor" d="M12.5 0C5.594 0 0 5.51 0 12.305c0 5.437 3.581 10.048 8.547 11.674.625.116.854-.265.854-.592 0-.292-.01-1.066-.016-2.092-3.477.742-4.21-1.65-4.21-1.65-.569-1.42-1.39-1.8-1.39-1.8-1.133-.764.087-.748.087-.748 1.255.086 1.914 1.268 1.914 1.268 1.115 1.881 2.927 1.338 3.641 1.024.113-.797.434-1.338.792-1.646-2.776-.308-5.694-1.366-5.694-6.08 0-1.343.484-2.44 1.286-3.302-.14-.31-.562-1.562.11-3.256 0 0 1.047-.33 3.437 1.261 1-.273 2.063-.409 3.125-.415 1.063.006 2.125.142 3.125.415 2.375-1.591 3.422-1.261 3.422-1.261.672 1.694.25 2.945.125 3.256.797.861 1.281 1.959 1.281 3.302 0 4.727-2.921 5.767-5.703 6.07.438.369.844 1.123.844 2.276 0 1.647-.016 2.97-.016 3.37 0 .322.22.707.86.584 5-1.615 8.579-6.23 8.579-11.658C25 5.509 19.403 0 12.5 0z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg"
        className="mx-4"
        width="24" height="20"><path fill="currentColor" d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM7.2 20.4H3.6V9.6h3.6v10.8zM5.4 7.56c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zm15 12.84h-3.6v-6.36c0-.96-.84-1.8-1.8-1.8-.96 0-1.8.84-1.8 1.8v6.36H9.6V9.6h3.6v1.44c.6-.96 1.92-1.68 3-1.68 2.28 0 4.2 1.92 4.2 4.2v6.84z"/></svg>
        </div>
      </div>
    </footer>
  )
}

export default Footer;