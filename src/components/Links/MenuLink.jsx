import Link from 'next/link';
import { useRouter } from 'next/router';

const MenuLink = ({ slug, children }) => {
  const router = useRouter();
  return (
    <Link href={slug}>
      <a
        className={`text-xs ${
          router.pathname === slug ? 'text-p1' : 'text-p3'
        } p-1 font-semibold tracking-2 leading-none my-auto transition-colors hover:opacity-75 duration-300 ease-in-out`}
      >
        {children}
      </a>
    </Link>
  );
};

export default MenuLink;
