import Link from "next/link"
import { IoIosArrowBack } from "react-icons/io"

const Notifications = () => {
  return (
    <div className="">
      <div className="relative px-8 border-b py-3">
        {/* back arrow */}

        <Link href="/" className="cursor-pointer">
          <IoIosArrowBack className="text-4xl text-gray-900 absolute top-1/2 -translate-y-1/2 left-2" />
        </Link>
        <div>
          <h2 className=" font-bold text-center text-gray-900">
            Notifications
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Notifications
