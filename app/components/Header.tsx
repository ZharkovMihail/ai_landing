import Image from "next/image";
import { imgLogoWhite, imgMenuIcon } from "@/app/lib/assets";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 pt-[60px] pb-[10px] bg-[#070504] rounded-b-[14px] max-w-[390px] mx-auto">
      <div className="relative w-10 h-10 shrink-0">
        <Image src={imgLogoWhite} alt="ToTheMoonTeam logo" fill className="object-cover" unoptimized />
      </div>
      <div className="relative w-[30.5px] h-4 shrink-0">
        <Image src={imgMenuIcon} alt="Menu" fill className="object-contain" unoptimized />
      </div>
    </header>
  );
}
