import Image from "next/image"
import SearchBar from "./SearchBar"
import Link from "next/link"

const MainNav = () => {
  return (
    <nav className="border-b px-4 h-[61px] flex items-center w-full">
      <ul className="flex justify-end gap-5 w-full items-center relative">
        <li className="inline-block mr-auto z-20 flex-shrink-0">
          <Link href={`/`} className="cursor-pointer">
            <Image src="/logo.png" alt="logo" width={110} height={50} />
          </Link>
        </li>
        <SearchBar />

        <li className="inline-block relative flex-shrink-0">
          <Link href="/notifications">
            <Image
              src="/icons/notifications.png"
              alt="notifications"
              width={26}
              height={26}
            />
          </Link>
          <div className="absolute rounded-full bg-red-400 w-3 h-3 top-0 -right-1 border border-white"></div>
        </li>
        <li className="inline-block rounded-full overflow-hidden flex-shrink-0">
          <Link href="/clffsnchz" className="cursor-pointer">
            <Image src="/face.jpg" alt="user" width={32} height={32} />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav
