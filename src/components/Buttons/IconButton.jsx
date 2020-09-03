const IconButton = ({children, handler, ariaLabel}) => {
    return (
        <button
        type="button"
        className="inline-flex items-center justify-center p-2
        bg-white rounded-md focus:outline-none focus:outline-shadow  transition duration-150 ease-in-out"
        aria-label={ariaLabel}
        onClick={handler}
      >
        {children}
      </button>
    )
}

export default IconButton;