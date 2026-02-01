const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-8 py-4 uppercase tracking-widest text-lg font-bold transition-all duration-300 transform hover:-translate-y-1 font-sans flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-[#FFC400] text-black hover:bg-[#E6B000] vintage-shadow",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black",
    ghost: "text-zinc-400 hover:text-[#FFC400]"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
