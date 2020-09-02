const MenuLink = ({url, children}) => {
  return (
    <a
      href={url}
      className="block mt-8 text-xs font-semibold text-white hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out text-center leading-1 tracking-2 focus:shadow-outline"
      role="menuitem"
    >
      {children}
    </a>
  );
};


export default MenuLink