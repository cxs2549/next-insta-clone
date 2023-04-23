"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { AiFillHome, AiOutlineCompass } from "react-icons/ai"
import { BsPlusSquare } from "react-icons/bs"
import { FiSearch } from "react-icons/fi"
import { Spin as Hamburger } from "hamburger-react"

const WideSidebar = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef()
  useOnClickOutside(ref, () => setOpen(false))

  return (
    <div className="hidden xl:block w-[244px] h-screen border-r fixed top-0 left-0 bottom-0 pt-10 pb-16 bg-white">
      <ul className="flex flex-col gap-2 h-full px-3">
        <li className="mb-4 px-4">
          <Link href={`/`}>
            <Image src="/logo.png" alt="logo" width={110} height={50} />
          </Link>
        </li>
        <li className="flex p-3 rounded-lg gap-4 items-center hover:bg-gray-100 cursor-pointer">
          <AiFillHome className="text-[30px] cursor-pointer" />
          <h6 className="text-neutral-800 font-bold">Home</h6>
        </li>
        <li className="flex p-3 rounded-lg hover:bg-gray-100 cursor-pointer gap-4 items-center">
          <FiSearch className="text-neutral-800" size={28} />
          <h6 className="text-neutral-800 font-medium">Search</h6>
        </li>
        <li className="flex p-3 rounded-lg hover:bg-gray-100 cursor-pointer gap-4 items-center">
          <AiOutlineCompass className="text-[28px] cursor-pointer" />
          <h6 className="text-neutral-800 font-medium">Explore</h6>
        </li>
        <li className="flex p-3 rounded-lg hover:bg-gray-100 cursor-pointer gap-4 items-center">
          <Image src="/icons/reels.png" width={24} height={26} alt="reels" />
          <h6 className="text-neutral-800 font-medium">Reels</h6>
        </li>
        <li className="flex p-3 rounded-lg hover:bg-gray-100 cursor-pointer gap-4 items-center">
          <Image
            src="/icons/messenger.png"
            width={27}
            height={26}
            alt="reels"
          />
          <h6 className="text-neutral-800 font-medium">Messages</h6>
        </li>
        <li className="flex p-3 rounded-lg hover:bg-gray-100 cursor-pointer gap-4 items-center">
          <div className="relative inline-block">
            <Image
              src="/icons/notifications.png"
              alt="notifications"
              width={26}
              height={26}
            />
            <div className="absolute rounded-full bg-red-400 w-3 h-3 top-0 -right-1 border border-white"></div>
          </div>
          <h6 className="text-neutral-800 font-medium">Notifications</h6>
        </li>
        <li className="flex p-3 rounded-lg hover:bg-gray-100 cursor-pointer gap-4 items-center">
          <BsPlusSquare size={25} className=" cursor-pointer" />
          <h6 className="text-neutral-800 font-medium">Create</h6>
        </li>
        <li className="flex p-3 rounded-lg hover:bg-gray-100 cursor-pointer gap-4 items-center">
          <Image
            src="/face.jpg"
            alt="user"
            className="rounded-full"
            width={28}
            height={30}
          />
          <h6 className="text-neutral-800 font-medium">Profile</h6>
        </li>
        <li className="mt-auto">
          <div
            ref={ref}
            onClick={() => setOpen(!open)}
            className=" flex  gap-x-3  items-center  relative hover:bg-neutral-200 cursor-pointer rounded-lg"
          >
            <div className="cursor-pointer">
              <div
                className={`absolute bottom-20 -left-1 bg-white shadow-xl min-w-[260px] rounded-xl transition-opacity duration-150 ease-out ${
                  open ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <ul className="">
                  <li className="px-6 py-[14px] border-t border-neutral-100  rounded-t-xl">
                    <Link href={`/`}>Settings</Link>
                  </li>
                  <li className="px-6 py-[14px] ">
                    <Link href={`/`}>Settings</Link>
                  </li>
                  <li className="px-6 py-[14px] ">
                    <Link href={`/`}>Settings</Link>
                  </li>
                  <li className="px-6 py-[14px] ">
                    <Link href={`/`}>Settings</Link>
                  </li>
                  <li className="px-6 py-[14px] ">
                    <Link href={`/`}>Settings</Link>
                  </li>
                </ul>
                <ul>
                  <li className="px-6 py-[14px] ">
                    <Link href={`/`}>Settings</Link>
                  </li>
                  <li className="px-6 py-[14px]  rounded-b-xl">
                    <Link href={`/`}>Settings</Link>
                  </li>
                </ul>
                <div className=" shadow left-8 translate-y-5 relative">
                  <div className="speech-bubble shadow"></div>
                </div>
              </div>
            </div>

            <Hamburger
              size={24}
              distance="sm"
              toggle={setOpen}
              toggled={open}
            />
            <h6 className="text-neutral-800 font-medium">More</h6>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default WideSidebar

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler])
}
