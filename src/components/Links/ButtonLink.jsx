import Link from 'next/link';

const ButtonLink = ({ children, destination }) => {
  return (
    <Link href={destination}>
      <a className="py-4 px-8 uppercase tracking-2 text-xs font-semibold bg-p2 text-white">
        {children}
      </a>
    </Link>
  );
};

export default ButtonLink;
