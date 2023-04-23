"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AiOutlineEllipsis } from "react-icons/ai"
import { BsChat, BsBookmark } from "react-icons/bs"
import { IoPaperPlaneOutline } from "react-icons/io5"

const Card = ({ picture, name, location }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const handleModal = () => {
    setModalOpen(!modalOpen)
    document.body.classList.toggle("overflow-hidden")
  }
  return (
    <div className="xs:max-w-[460px] mx-auto ">
      {/* header */}
      <div className="flex items-center pt-5 pb-3 gap-2.5 px-2 xs:px-0">
        {/* image */}
        <div className="rounded-full overflow-hidden shadow-ring">
          <Image
            src={picture}
            alt=""
            height={32}
            width={32}
            className=" rounded-full"
          />
        </div>

        {/* name, location, date posted */}
        <div>
          <div className="flex items-center">
            <h6 className="font-semibold text-sm">{name.toLowerCase()}</h6>
            <p className="ml-2 text-sm text-neutral-600 font-semibold">
              {" "}
              <span className="mr-0.5">&bull;</span> 1d
            </p>
          </div>
          <p className="text-xs">{location}</p>
        </div>

        {/* ellipsis */}
        <div className="ml-auto inline-block">
          <div onClick={handleModal} className="cursor-pointer">
            <button>
              <AiOutlineEllipsis className="text-3xl" />
            </button>
          </div>
          {/* modal  */}
          <div
            onClick={handleModal}
            className={`fixed overflow-hidden inset-0 z-30 bg-black/60 grid place-items-center transition-opacity duration-100 ${
              modalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <ul className="mx-8 bg-white rounded-xl w-[260px] xl:w-[400px] text-black flex flex-col  divide-y text-sm mb-8">
              <li className="py-[14px] text-center">
                <p className="font-bold text-red-500">Report</p>
              </li>
              <li className="py-[14px] text-center">
                <p className="font-bold text-red-500">Unfollow</p>
              </li>
              <li className="py-[14px] text-center">
                <p className="font-medium ">Add to favorites</p>
              </li>
              <li className="py-[14px] text-center">
                <p className="font-medium ">Go to post</p>
              </li>
              <li className="py-[14px] text-center">
                <p className="font-medium ">Share to...</p>
              </li>
              <li className="py-[14px] text-center">
                <p className="font-medium ">Copy link</p>
              </li>
              <li className="py-[14px] text-center">
                <p className="font-medium ">Embed</p>
              </li>
              <li className="py-[14px] text-center">
                <p className="font-medium ">About this account</p>
              </li>
              <li className="py-[14px] text-center">
                <p className="font-medium ">Cancel</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* image */}
      <div className="relative">
        <Image
          src="/images/image-1.jpg"
          width={700}
          height={700}
          alt="image"
          className="w-full rounded-t xs:rounded-b"
        />
      </div>
      {/* description  */}
      <div className="px-4 xs:px-0 pt-4 pb-8">
        {/* icons: heart, message, share, bookmark */}
        <div className="flex items-center gap-5">
          <Image
            src="/icons/notifications.png"
            alt="notifications"
            width={26}
            height={26}
          />
          <BsChat className="-translate-y-0.5 relative text-[1.7rem] scale-x-[-1]" />
          <IoPaperPlaneOutline className="text-3xl" />
          <BsBookmark className="text-3xl ml-auto" />
        </div>
        {/* likes */}
        <div className="mt-3">
          <h6 className="font-semibold text-sm">56,738 likes</h6>
        </div>
        {/* username and caption */}
        <div className="text-sm mt-2">
          <span className="font-semibold">{name.toLowerCase()}</span> Taxidermy
          poutine post-ironic hexagon pug food truck banh mi subway tile paleo
          bespoke. Trust fund tilde sustainable fingerstache biodiesel
          adaptogen...
        </div>
        {/* more link */}
        <Link href={`/`} className="block text-sm text-neutral-500 font-medium">
          more
        </Link>
        {/* view all comments */}
        <div className="mt-1.5">
          <Link href={`/`} className="text-sm text-neutral-500 font-medium">
            View all comments
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
