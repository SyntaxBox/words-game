import { Link } from "react-router-dom";

function Logo({ height }: { height: number }) {
  const style = {
    height: `${height}px`,
    width: `${height}px`,
  };
  return (
    <Link to="/" className="flex items-center justify-between">
      <img style={style} src="./logo.svg" alt="logo image" />
      <p className="text-3xl font-bold text-pink-500">ords</p>
    </Link>
  );
}

export default Logo;
