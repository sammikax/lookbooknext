import Image from 'next/image';
import logo from '@/../public/images/logo.png';

export default function Logo() {
  return (
    <div className="flex items-center justify-start w-[40px] sm:w-[50px] md:w-[60px] lg:w-[5vh]">
      <Image src={logo} className="w-[5vh]" alt="Logo" />
    </div>
  );
}
