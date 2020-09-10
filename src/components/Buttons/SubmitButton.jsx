export default function SubmitButton({ children }) {
  return (
    <button className="inline-block px-8 py-4 text-xs font-semibold leading-none text-white uppercase whitespace-no-wrap transition-colors duration-100 bg-p2 transparentborder tracking-2 hover:bg-p1 focus:shadow-outline ">
      {children}
    </button>
  );
}
