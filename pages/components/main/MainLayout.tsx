import { ReactNode } from "react";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { CgHomeAlt } from "react-icons/cg";
import { MdOutlineSettings } from "react-icons/md";
import Link from 'next/link';
import Image from "next/image";

import { usePathname } from 'next/navigation';

import Logo from "../../assets/logo.svg";

function NavigationButton(props: {
  href?: string;
  active?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  const active = props.active ?? false;
  const href = props.href ?? "#";
  const className = [
    props.className ?? "",
    active ? "bg-white" : "",
    active ? "text-[#3B97CB]" : "text-white",
    "flex flex-row items-center gap-3 rounded-lg p-3 text-2xl font-bold duration-300 hover:bg-white hover:text-[#3B97CB]",
  ].join(" ");

  return (
    <Link href={href} className={className}>
      {props.children}
    </Link>
  );
}

export default function MainLayout(props: { children?: ReactNode }) {
  const navigations = {
    "/": {
      title: "Home",
      icon: <CgHomeAlt />,
    },
    "/products": {
      title: "Products",
      icon: <AiOutlineFolderOpen />,
    },
    "/sales": {
      title: "Sales",
      icon: <BsGraphUp />,
    },
    "/settings": {
      title: "Settings",
      icon: <MdOutlineSettings />,
    },
  };

  type NavigationRoute = keyof typeof navigations;

  const navigationRoute = usePathname();

  const title = navigations[navigationRoute as NavigationRoute]?.title ?? "";

  return (
    <div className="flex h-screen min-h-screen w-full min-w-full flex-row bg-bubbles font-sans">
      <div className="flex h-full w-full flex-row">
        <div className="hidden h-full w-80 flex-none flex-col gap-3 bg-[#3B97CB] p-6 xl:flex">
          <div className="flex h-20 w-full flex-row items-center justify-center gap-3">
            <Image src={Logo} alt="Logo" />
            <div className="text-3xl font-bold text-white">{`BeLaundry`}</div>
          </div>
          <div className="flex flex-row gap-3 text-2xl font-bold text-white">{`Menu`}</div>
          {Object.keys(navigations).map((key) => {
            const navigation = navigations[key as NavigationRoute];
            const value = navigation.title;
            const icon = navigation.icon;

            return (
              <NavigationButton key={key} href={key} active={value === title}>
                {icon}
                <div>{value}</div>
              </NavigationButton>
            );
          })}
        </div>
        <div className="flex h-full w-full flex-col">
          <div className="flex h-16 w-full flex-none flex-row items-center bg-white">
            <div className="flex h-16 w-16 flex-none flex-col items-center justify-center">
              <Image src={Logo} className="h-8 w-8" alt="Logo" />
            </div>
            <div className="flex h-full w-full flex-row items-center text-4xl font-bold text-[#303030]">
              {title === "Home" && title}
            </div>
          </div>
          <div className="h-full w-full">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
