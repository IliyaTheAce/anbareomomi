import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer({
  data,
}: {
  data: {
    Footer: {
      groups: [
        {
          header: string;
          img: string | undefined;
          links: [{ title: string; url: string }];
        },
      ];
    };
  };
}) {
  return (
    <section
      className={
        "bg-gray-500 w-full py-14 px-10 text-white flex flex-col gap-6"
      }
    >
      <div className={"flex flex-col md:flex-row gap-4 justify-evenly"}>
        {data.Footer.groups.map((group) => (
          <div key={group.header} className={"flex flex-col gap-2 text-md"}>
            {group.img && (
              <Image
                src={group.img}
                alt={"Logo"}
                width={170}
                height={116}
                className={"mb-4"}
              />
            )}
            <h2 className={"font-bold"}>{group.header}</h2>
            {group.links.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                className={
                  link.title.includes("#")
                    ? "text-[#c96b1e]"
                    : "hover:underline"
                }
              >
                {link.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Footer;
