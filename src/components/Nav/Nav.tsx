import { IconBrandGithub, IconInfoSmall } from "@tabler/icons-react";
import IconButton from "../../ui/buttons/IconButton";
import Logo from "../Logo/Logo";
import DarkModeButton from "../DarkMode/DarkMode";
import Container from "../../ui/layout/Container";
import { iconStroke, iconsSize } from "../../shared/constants";

function Nav() {
  return (
    <nav className="w-screen">
      <Container className=" flex items-center justify-between">
        <Logo height={64} />
        <div className="flex items-center justify-center gap-3">
          <IconButton title="how to play?">
            <IconInfoSmall size={iconsSize + 20} stroke={iconStroke - 0.5} />
          </IconButton>
          <IconButton title="Github repo">
            <IconBrandGithub size={iconsSize} stroke={iconStroke} />
          </IconButton>
          <IconButton title="toggle dark mode">
            <DarkModeButton />
          </IconButton>
        </div>
      </Container>
    </nav>
  );
}

export default Nav;
