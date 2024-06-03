import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent px-4 sm:px-8 md:px-16">
      <div className="container mx-auto h-16 md:h-20 flex justify-between items-center">
        {/* logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={220}
              height={50}
              priority
              className="h-auto w-auto"
            />
          </Link>
        </div>

        {/* socials */}
        <div className="hidden sm:block">
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
