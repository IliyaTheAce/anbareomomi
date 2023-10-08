import Link from "next/link";

export default function BigButton({
  minWidth,
  color,
}: {
  minWidth?: boolean;
  color?: string;
}) {
  return (
    <Link
      href={"tel:+989056723180"}
      className={`${minWidth ? "" : "w-full"} ${
        color ? color : "bg-secondary text-textColor"
      } rounded-full   flex justify-center items-center py-3 px-5`}
    >
      همین حالا انبارتو بگیر!
    </Link>
  );
}
