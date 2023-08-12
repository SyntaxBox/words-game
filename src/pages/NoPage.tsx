import { Link } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import H1 from "../ui/typography/H1";
import TextButton from "../ui/buttons/textButton";
import Container from "../ui/layout/Container";

function Layout() {
  return (
    <>
      <Nav />
      <Container>
        <H1>Page Not Found</H1>
        <Link to="/">
          <TextButton>Back Home</TextButton>
        </Link>
      </Container>
    </>
  );
}

export default Layout;
