import Logo from "@/public/Logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full flex flex-col items-center justify-center py-8 px-6 text-center">
      <div className="flex items-center justify-center gap-3">
        <h1 className="text-4xl font-bold text-white tracking-tight">
          EZ-Tuner
        </h1>
        <div className="relative w-10 h-10 shrink-0">
          <Image
            src={Logo}
            alt="EZ-Tuner logo"
            fill
            className="object-contain brightness-0 invert"
          />
        </div>
      </div>
      <p className="text-sm text-blue-100 font-medium mt-1 tracking-wide italic">
        Start tuning your 6-string right away!
      </p>
    </header>
  );
};

export default Header;
