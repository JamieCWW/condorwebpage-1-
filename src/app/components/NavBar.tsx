import Logo from "@/../public/condorlogo.png";
import Image from "next/image";

export function NavBar() {
  return (
    <nav className="sticky left-0 top-0 z-50 h-20 w-full bg-white/75 backdrop-blur-sm">
      <Image
        src={Logo}
        alt="Condor Web Works Logo"
        className="h-full w-fit p-2"
      />
    </nav>
  );
}
