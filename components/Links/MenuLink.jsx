import Link from "next/link";
import { useRouter } from 'next/router';

const MenuLink = ({ slug, children }) =>  {
  const router = useRouter();
  return (
    <Link href={slug}>
        <a
          className={`font-medium text-xs ${router.pathname === slug ? "text-p1" : "text-p3"} font-semibold tracking-2 leading-none my-auto transition-colors duration-100 ease-in`}
        >
        {children}
      </a>           

    </Link>
  )
}

export default MenuLink;