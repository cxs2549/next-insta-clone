import Image from "next/image"
import Link from "next/link"
import { AiFillHome, AiOutlineCompass } from "react-icons/ai"
import { BsPlusSquare } from "react-icons/bs"

const BottomBar = () => {
  return (
    <div className="border-t bg-white fixed bottom-0 w-full h-[61px] py-2 flex items-center justify-around  md:hidden">
      <Link href={`/`}>
        <AiFillHome className="text-3xl cursor-pointer" />
      </Link>
      <Link href={`/`}>
        <AiOutlineCompass className="text-3xl cursor-pointer" />
      </Link>
      <Link href={`/`}>
        <BsPlusSquare size={26} className=" cursor-pointer" />
      </Link>
      <Link href={`/`}>
        <Image src="/icons/reels.png" width={26} height={26} alt="reels" />
      </Link>
      <Link href={`/`}>
        <Image src="/icons/messenger.png" width={26} height={26} alt="reels" />
      </Link>
    </div>
  )
}

export default BottomBar
