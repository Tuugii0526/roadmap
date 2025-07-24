import Link from "next/link";

export const Login = () => {
  return (
    <div>
      <form action="" className="flex flex-col gap-5  ">
        <label htmlFor="email">
          Email
          <input type="text" name="email" id="email" className="border" />
        </label>
        <label htmlFor="password">
          Password
          <input type="text" name="password" id="password" className="border" />
        </label>
        <button className="text-start">Login</button>
        <Link href={"/signup"}>Sign up</Link>
      </form>
    </div>
  );
};
