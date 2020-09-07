import Link from 'next/link';

const ButtonLink = ({ children, destination }) => {
  return (
    <Link href={destination}>
      <a
        className="inline-block whitespace-no-wrap py-4 px-8 uppercase tracking-2 text-xs font-semibold 
      text-p3 border border-p3
      bg-transparent 
      
      hover:bg-p2 hover:text-white 
      transition-colors duration-100
      focus:bg-p2 focus:text-white 
      focus:shadow-outline
      "
      >
        {children}
      </a>
    </Link>
  );
};

export default ButtonLink;
