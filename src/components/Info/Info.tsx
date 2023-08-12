import { IconX } from "@tabler/icons-react";
import Container from "../../ui/layout/Container";
import H2 from "../../ui/typography/H2";
import P from "../../ui/typography/P";
import IconButton from "../../ui/buttons/IconButton";
import { iconStroke, iconsSize } from "../../shared/constants";

function Info({ setShowInfo }: { setShowInfo: (state: boolean) => unknown }) {
  return (
    <div className="absolute w-screen h-screen top-0 left-0 bg-white dark:bg-slate-900 py-10">
      <Container className="relative flex flex-col gap-6">
        <div className="absolute top-0 right-0">
          <IconButton onClick={() => setShowInfo(false)} title="hide">
            <IconX size={iconsSize} stroke={iconStroke} />
          </IconButton>
        </div>
        <H2>How to play</H2>
        <ul className="list-disc ml-4">
          <li>
            <P>You have a number of tries</P>
          </li>
          <li>
            <P>
              Each Try you shows the correct letters and wrong ones and the ones
              in wrong placement{" "}
            </P>
          </li>{" "}
          <li>
            <P>You need to find the word before the trial ends</P>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Info;
