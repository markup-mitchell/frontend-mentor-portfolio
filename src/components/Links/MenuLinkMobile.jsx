import Link from 'next/link';

const MenuLinkMobile = ({href, children, role}) => {
  return (
    <Link href={href}>
    <a
      className="text-xs font-semibold text-white hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out text-center tracking-2 focus:text-p1 focus:shadow-ouline"
      >
      {children}
    </a>
      </Link>
  );
};

export default MenuLinkMobile