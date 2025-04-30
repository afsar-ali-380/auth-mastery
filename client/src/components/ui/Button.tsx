type ButtonProps = {
  type?: "button" | "submit";
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  children,
}) => {
  return (
    <button
      type={type}
      className="w-full bg-gray-900 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg transition-colors duration-200 cursor-pointer"
    >
      {children}
    </button>
  );
};
