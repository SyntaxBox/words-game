import { IconBrandGithub, IconInfoSmall } from "@tabler/icons-react";
import IconButton from "../../ui/buttons/IconButton";
import Logo from "../Logo/Logo";
import DarkModeButton from "../DarkMode/DarkMode";
import Container from "../../ui/layout/Container";

function Nav() {
  return (
    <nav className="w-screen">
      <Container className=" flex items-center justify-between">
        <Logo height={80} />
        <div>
          <IconButton title="how to play?">
            <IconInfoSmall />
          </IconButton>
          <IconButton title="Github repo">
            <IconBrandGithub></IconBrandGithub>
          </IconButton>
          <IconButton title="how to play?">
            <DarkModeButton />
          </IconButton>
        </div>
      </Container>
    </nav>
  );
}

export default Nav;
