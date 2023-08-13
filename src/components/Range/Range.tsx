import {
  IconArrowBigDownLines,
  IconArrowBigUpLines,
} from "@tabler/icons-react";
import { TextButton, P, IconButton } from "../../ui";

function Range({
  min,
  max,
  value,
  setValue,
  correctionFactor,
  text,
}: {
  min: number;
  max: number;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  correctionFactor: number;
  text: string;
}) {
  return (
    <div className="flex gap-3">
      <label
        htmlFor="minmax-range"
        className="mb-2 text-sm font-medium text-gray-900 dark:text-white w-full flex items-center justify-center gap-3"
      >
        <P>{text}</P>{" "}
        <TextButton className="h-12 w-12">
          {value + correctionFactor}
        </TextButton>
      </label>
      <div className="flex gap-3">
        <IconButton
          title="increase"
          onClick={() => setValue(value + 1)}
          disabled={value >= max}
        >
          <IconArrowBigUpLines />
        </IconButton>
        <IconButton
          disabled={value <= min}
          title="decrease"
          onClick={() => setValue(value - 1)}
        >
          <IconArrowBigDownLines />
        </IconButton>
      </div>
    </div>
  );
}

export default Range;
