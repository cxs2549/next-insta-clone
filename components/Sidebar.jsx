"use client"
import Image from "next/image"
import Link from "next/link"
import { AiFillHome, AiOutlineCompass } from "react-icons/ai"
import { BsPlusSquare } from "react-icons/bs"
import { FiSearch } from "react-icons/fi"
import { Spin as Hamburger } from "hamburger-react"

const Sidebar = () => {
  return (
    <div className="bg-white hidden md:block w-[74px] xl:hidden h-screen border-r fixed top-0 left-0 pt-10 pb-20 overflow-hidden">
      <ul className="flex flex-col justify-center items-center gap-8 h-full">
        <li className="mb-4">
          <Link href={`/`}>
            <Image src="/icons/logo-camera.png" width={22} height={44} alt="camera" />
          </Link>
        </li>
        <li>
          <AiFillHome className="text-[28px] cursor-pointer" />
        </li>
        <li>
          <FiSearch className="text-neutral-800" size={26} />
        </li>
        <li>
          <AiOutlineCompass className="text-[26px] cursor-pointer" />
        </li>
        <li>
          <Image src="/icons/reels.png" width={22} height={26} alt="reels" />
        </li>
        <li>
          <Image
            src="/icons/messenger.png"
            width={25}
            height={26}
            alt="reels"
          />
        </li>
        <li className="inline-block relative">
          <Image
            src="/icons/notifications.png"
            alt="notifications"
            width={24}
            height={26}
          />
          <div className="absolute rounded-full bg-red-400 w-3 h-3 top-0 -right-1 border border-white"></div>
        </li>
        <li>
          <BsPlusSquare size={23} className=" cursor-pointer" />
        </li>
        <li className="rounded-full overflow-hidden">
          <Image src="/face.jpg" alt="user" width={26} height={30} />
        </li>
        <li className="mt-auto">
          <Hamburger size={22} distance="sm" />
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
