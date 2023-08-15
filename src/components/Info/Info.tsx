import { IconX } from "@tabler/icons-react";
import { H2, P, Container, IconButton } from "../../ui";
import { StringUtils, iconStroke, iconsSize } from "../../shared";
import ShowResult from "../ShowResult/ShowResult";

function Info({ setShowInfo }: { setShowInfo: (state: boolean) => unknown }) {
  return (
    <div className="absolute overflow-y-scroll w-screen h-screen top-0 left-0 bg-white dark:bg-slate-900 py-10">
      <Container className="relative flex flex-col gap-6">
        <div className="sm:absolute top-0 right-0">
          <IconButton onClick={() => setShowInfo(false)} title="hide">
            <IconX size={iconsSize} stroke={iconStroke} />
          </IconButton>
        </div>
        <H2>How to play</H2>
        <ul className="list-disc ml-4 text-white">
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
        <P>For Example</P>
        <ShowResult
          duration={1000}
          result={StringUtils.compareStrings("pedate", "create")}
        />
        <ul className="list-disc ml-4">
          <li className="text-green-500">
            <P>
              Green:{" "}
              <span className="text-black dark:text-white">
                means the letter in the correct place
              </span>
            </P>
          </li>
          <li className="text-orange-500">
            <P>
              Orange:{" "}
              <span className="text-black dark:text-white">
                means the letter in the wrong place
              </span>
            </P>
          </li>{" "}
          <li className="text-red-500">
            <P>
              Red:{" "}
              <span className="text-black dark:text-white">
                means the letter does not exists in the word
              </span>
            </P>
          </li>
        </ul>

        <ShowResult
          duration={1000}
          result={StringUtils.compareStrings("pedate", "pedate")}
        />
        <ul className="list-disc ml-4">
          <li className="text-pink-500">
            <P>
              Pink:{" "}
              <span className="text-black dark:text-white">
                means it is the correct word
              </span>
            </P>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Info;
