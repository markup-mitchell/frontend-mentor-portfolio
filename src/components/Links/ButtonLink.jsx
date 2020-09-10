import Link from 'next/link';

export default function ButtonLink({ children, destination }) {
  return (
    <Link href={destination}>
      <a className="inline-block px-8 py-4 text-xs font-semibold uppercase whitespace-no-wrap transition-colors duration-100 bg-transparent border tracking-2 text-p3 border-p3 hover:bg-p2 hover:text-white focus:bg-p2 focus:text-white focus:shadow-outline ">
        {children}
      </a>
    </Link>
  );
}
