import clsx from "clsx";
import { EmojiSadIcon } from "@heroicons/react/solid";

export default function Spinner({
  containerSizeClass,
  sizeClass,
  colorClass,
}: {
  containerSizeClass?: string;
  sizeClass?: string;
  colorClass?: string;
}) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center ",
        containerSizeClass || "w-full h-full"
      )}
    >
      <EmojiSadIcon
        className={clsx(
          "animate-spin",
          sizeClass || "h-24",
          colorClass || "text-gray-800"
        )}
      />
    </div>
  );
}
