import Image from "next/image";
import { imgLogoWhite, imgMenuIcon } from "@/app/lib/assets";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-5 pt-[60px] pb-[10px]">
      <div className="relative w-10 h-10 shrink-0">
        <Image src={imgLogoWhite} alt="ToTheMoonTeam logo" fill className="object-cover" unoptimized />
      </div>
      <div className="relative w-[30.5px] h-4 shrink-0">
        <Image src={imgMenuIcon} alt="Menu" fill className="object-contain" unoptimized />
      </div>
    </header>
  );
}
