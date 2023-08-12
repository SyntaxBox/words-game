function Logo({ height }: { height: number }) {
  const style = {
    height: `${height}px`,
    width: `${height}px`,
  };
  return <img style={style} src="./logo.svg" alt="logo image" />;
}

export default Logo;
