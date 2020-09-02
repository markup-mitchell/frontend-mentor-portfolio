export default ({children, handler}) => {
    return (
        <button
        type="button"
        className="inline-flex items-center justify-center p-2
        bg-white rounded-md focus:outline-none  transition duration-150 ease-in-out"
        aria-label="Close menu"
        onClick={handler}
      >
        {children}
      </button>
    )
}