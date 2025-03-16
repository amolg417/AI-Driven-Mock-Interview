import { Link } from "react-router-dom";

export const LogoContainer = () => {
  return (
    <Link to={"/"}>
      <h1 className="text-2xl md:text-3xl font-bold text-indigo-600">AI Coach</h1>
    </Link>
  );
};
