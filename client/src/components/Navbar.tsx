import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-tight">Auth</h1>
      <nav>
        <ul className="flex space-x-6 text-base font-medium">
          <li>
            <Link
              href={"/log-in"}
              className="hover:text-indigo-400 transition-colors"
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              href={"/sign-up"}
              className="hover:text-indigo-400 transition-colors"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
