import Link from "next/link";

export const Navbar = () => {
  return (
    <ul className="w-[500px] h-full mx-auto flex justify-evenly items-center gap-1 text-white">
      <li className="border rounded-full py-1 px-3">
        <Link href={"/sign-up"}>Sign up</Link>
      </li>
      <li className="border rounded-full py-1 px-3">
        <Link href={"/log-in"}>Log in</Link>
      </li>
    </ul>
  );
};
