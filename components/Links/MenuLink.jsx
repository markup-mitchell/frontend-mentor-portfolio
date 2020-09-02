import Link from "next/link";

const MenuLink = ({slug, children}) =>  {
  return (
    <Link href={`${slug}`}>
        <a
          className="font-medium text-xs text-p3 font-semibold tracking-2 leading-none my-auto"
        >
        {children}
      </a>           

    </Link>
  )
}

export default MenuLink;