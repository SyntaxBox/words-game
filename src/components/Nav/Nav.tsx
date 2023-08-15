import { useState } from "react";
import { IconBrandGithub, IconInfoSmall } from "@tabler/icons-react";
import { IconButton, Container } from "../../ui";
import { iconStroke, iconsSize } from "../../shared";
import Logo from "../Logo/Logo";
import Info from "../Info/Info";
import DarkModeButton from "../DarkMode/DarkMode";

function Nav() {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <nav className="w-screen fixed top-0 left-0 bg-white dark:bg-slate-900">
      <Container className=" flex items-center justify-between">
        <Logo height={64} />
        <div className="flex items-center justify-center gap-3">
          <IconButton
            title="how to play?"
            onClick={() => setShowInfo(!showInfo)}
          >
            <IconInfoSmall size={iconsSize + 20} stroke={iconStroke - 0.5} />
          </IconButton>
          <a href="https://github.com/qhamid/words" target="_blank">
            <IconButton title="Github repo">
              <IconBrandGithub size={iconsSize} stroke={iconStroke} />
            </IconButton>
          </a>

          <IconButton title="toggle dark mode">
            <DarkModeButton />
          </IconButton>
        </div>
      </Container>
      {showInfo && <Info setShowInfo={setShowInfo} />}
    </nav>
  );
}

export default Nav;
