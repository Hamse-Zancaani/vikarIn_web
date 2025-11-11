import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
  <Image
  src="/images/logo/19.png"
  alt="Vikarin logo"
  width={200}
  height={60}
  className="object-contain w-auto h-12 md:h-14 lg:h-16"
  priority
  quality={100}
/>


    </Link>
  );
};

export default Logo;
